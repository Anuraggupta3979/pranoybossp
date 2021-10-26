// Implement a firestore data provider for react-admin
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS,
} from "react-admin";

import firebase, { db } from "../../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
  where,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

var storage = getStorage(firebase);
/**
 * Utility function to flatten firestore objects, since 'id' is not a field in FireStore
 *
 * @param {DocumentSnapshot} DocumentSnapshot Firestore document snapshot
 * @returns {Object} the DocumentSnapshot.data() with an additionnal "Id" attribute
 */
function getDataWithId(DocumentSnapshot) {
  var dataWithId = {};
  // console.log('getDataWithId Id=', DocumentSnapshot.id)
  if (DocumentSnapshot) {
    dataWithId = {
      id: DocumentSnapshot.id,
      ...DocumentSnapshot.data(),
    };
  }
  // console.log(dataWithId);
  return dataWithId;
}

async function uploadFileToBucket(rawFile, storageRef) {
  console.log("Beginning upload");
  return uploadBytes(storageRef, rawFile)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
      return getDownloadURL(storageRef);
    })
    .catch((error) => {
      console.log(error);
      return new Error({ message: error.message_, status: 401 });
    });
}

export const myDataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    var q =
      field === "id"
        ? query(collection(db, resource), limit(page * perPage))
        : query(
            collection(db, resource),
            orderBy(field, order.toLowerCase()),
            limit(page * perPage)
          );
    return getDocs(q)
      .then((QuerySnapshot) => {
        var totalCount = QuerySnapshot.docs.length;
        var firstDocToDisplayCount =
          page === 1 ? 1 : Math.min((page - 1) * perPage, totalCount);
        var firstDocToDisplay = QuerySnapshot.docs.slice(
          firstDocToDisplayCount - 1
        );
        return {
          data: firstDocToDisplay.map((doc) => getDataWithId(doc)),
          total: totalCount,
        };
      })
      .catch((error) => Promise.reject(error));
  },
  getOne: (resource, params) => {
    console.log("getOne", params.id);
    return getDoc(doc(db, resource, params.id))
      .then((doc) => {
        if (doc.exists()) {
          return { data: getDataWithId(doc) };
        } else {
          throw new Error({ message: "No such doc", status: 404 });
        }
      })
      .catch((error) => {
        throw new Error({ message: error, status: 404 });
      });
  },
  getMany: (resource, params) => {
    console.log("getMany", params.ids);
    return Promise.all(params.ids.map((id) => getDoc(doc(db, resource, id))))
      .then((arrayOfResults) => {
        return {
          data: arrayOfResults.map((documentSnapshot) =>
            getDataWithId(documentSnapshot)
          ),
        };
      })
      .catch((err) => Promise.reject(err));
  },
  getManyReference: (resource, params) => {
    console.log("getManyReference");
    const { target, id } = params;
    const { field, order } = params.sort;
    return getDocs(
      query(
        collection(db, resource),
        where(target, "==", id),
        orderBy(field, order.toLowerCase())
      )
    )
      .then((QuerySnapshot) => {
        console.log("getManyReference", QuerySnapshot);
        return {
          data: QuerySnapshot.docs.map((DocumentSnapshot) =>
            getDataWithId(DocumentSnapshot)
          ),
          total: QuerySnapshot.docs.length,
        };
      })
      .catch((err) => Promise.reject(err));
  },
  create: (resource, params) => {
    const key = params.data.name.toLowerCase().split(" ").join("-");
    console.log(`create key: ${key}`);
    var listOfFiles = Object.keys(params.data).filter(
      (key) => params.data[key].rawFile
    );
    var storageRef = ref(
      storage,
      resource + "/" + params.data[listOfFiles[0]].rawFile.name
    );
    console.log(listOfFiles);
    if (listOfFiles.length === 0) return Promise.reject("Upload a Image First");
    return uploadFileToBucket(
      params.data[listOfFiles[0]].rawFile,
      storageRef
    ).then((downloadURL) => {
      console.log("downloadURL: " + downloadURL);
      delete params.data[listOfFiles[0]].rawFile;
      params.data.image = downloadURL;
      return setDoc(doc(db, resource, key), {
        ...params.data,
      })
        .then((DocumentReference) => {
          console.log(DocumentReference);
          return {
            data: { id: key, ...params.data },
          };
        })
        .catch((err) => Promise.reject(err));
    });
  },
  update: (resource, params) => {
    console.log("Update record id", params.id);
    const { id, ...everythingElse } = params.data;
    return setDoc(doc(db, resource, id), {
      ...everythingElse,
    })
      .then((DocumentReference) => {
        console.log(DocumentReference);
        return {
          data: { id: params.id, ...params.data },
        };
      })
      .catch((err) => Promise.reject(err));
  },
  updateMany: (resource, params) => Promise,
  delete: (resource, params) => {
    console.log("Delete record id", params.id);
    const { id } = params.previousData;
    return deleteDoc(doc(db, resource, id))
      .then(() => ({ data: params.previousData }))
      .catch((err) => Promise.reject(err));
  },
  deleteMany: (resource, params) => {
    console.log("Delete Many", params.ids);
    return Promise.all(params.ids.map((id) => deleteDoc(doc(db, resource, id))))
      .then(() => ({
        data: params.ids,
      }))
      .catch((err) => Promise.reject(err));
  },
};
export const firebaseAuthProvider = (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    return firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch((error) => {
        throw new Error({ message: error.message, status: 401 });
      });
  }
  if (type === AUTH_LOGOUT) {
    return firebase
      .auth()
      .signOut()
      .catch((error) => {
        throw new Error({ message: error.message, status: 500 });
      });
  }
  if (type === AUTH_CHECK) {
    return firebase.auth().currentUser ? Promise.resolve() : Promise.reject();
  }
  if (type === AUTH_GET_PERMISSIONS) {
    // Try to find a "user" collection and return the role attribute
    return db
      .collection("user")
      .doc(firebase.auth().currentUser)
      .then((doc) => {
        if (doc.exists) {
          return doc.data().role;
        } else {
          return "user";
        }
      })
      .catch((error) => {
        return "user";
      });
  }
  return Promise.resolve();
};
