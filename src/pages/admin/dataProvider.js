// Implement a firestore data provider for react-admin
import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  DELETE_MANY,
  GET_MANY,
  GET_MANY_REFERENCE,
} from "react-admin";

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
  updateDoc,
  setDoc,
  getDoc,
  where,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

// // Required for side-effects
// require("firebase/firestore");

var storage = getStorage(firebase);
// var storageRoot = ref(storage);

// Disable deprecated features
// db.settings({
//   timestampsInSnapshots: true
// });

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

/**
 * Utility function to upload a file in a Firebase storage bucket
 *
 * @param {File} rawFile the file to upload
 * @param {File} storageRef the storage reference
 * @returns {Promise}  the promise of the URL where the file can be download from the bucket
 */
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
  // return storageRef.put(rawFile)
  //     .then( snapshot => {
  //         console.log('Uploaded file !');
  //         // Add url
  //         return storageRef.getDownloadURL();
  //     })
  //     .catch( (error) => {
  //         console.log(error);
  //         throw new Error( { message: error.message_ , status:401} )
  //     });
}

/**
 * Utility function to create or update a file in Firestore
 *
 * @param {String} resource resource name, will be used as a directory to prevent an awful mess in the bucket
 * @param {File} rawFile the file to upload if it is not already there
 * @param {Function} uploadFile the storage reference
 * @returns {Promise}  the promise of the URL where the file can be download from the bucket
 */
// async function createOrUpdateFile(resource, rawFile) {
//   console.log(
//     "Beginning upload file to storage bucket for file :",
//     rawFile.name
//   );
//   var storageRef = ref(storage, resource + "/" + rawFile.name);
//   // Check if the file already exist (same name, same size)
//   // In this case, no need to upload
//   const uploadTask = uploadBytesResumable(storageRef, rawFile);

//   // Register three observers:
//   // 1. 'state_changed' observer, called any time the state changes
//   // 2. Error observer, called on failure
//   // 3. Completion observer, called on successful completion
//   return uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       // Observe state change events such as progress, pause, and resume
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log("Upload is " + progress + "% done");
//       switch (snapshot.state) {
//         case "paused":
//           console.log("Upload is paused");
//           break;
//         case "running":
//           console.log("Upload is running");
//           break;
//       }
//     },
//     (error) => {
//       // Handle unsuccessful uploads
//       console.log(error);
//       //   return uploadFile(rawFile, storageRef)
//     },
//     () => {
//       // Handle successful uploads on complete
//       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//       return getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log("File available at", downloadURL)
//         return downloadURL
//       });
//     }
//   )
//     return storageRef.getMetadata()
//         .then( metadata => {
//             console.log(metadata)
//             if ( metadata && metadata.size === rawFile.size) {
//                 console.log("file already exists");
//                 return storageRef.getDownloadURL();
//             } else {
//                 return uploadFile(rawFile, storageRef)
//             }
//         })
//         .catch(
//             () => { console.log('File does not exist'); return uploadFile(rawFile, storageRef) }
//         );
// }

export const myDataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    // const filter = params.filter;
    // query all the docs from the first to page*perPage
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
        // slice the results
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
    console.log("getOne", params.id)
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
    console.log("getMany", params.ids)
    return Promise.all(
      params.ids.map((id) => getDoc(doc(db, resource, id)))
    )
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
    console.log("getManyReference")
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
    const key = params.data.name.toLowerCase().split(' ').join('-')
    console.log(`create key: ${key}`)
    // Check if there is a file to upload
    var listOfFiles = Object.keys(params.data).filter(
      (key) => params.data[key].rawFile
    );
    var storageRef = ref(storage, resource + "/" + params.data[listOfFiles[0]].rawFile.name);
    // return createOrUpdateFile(
    //   resource,
    //   params.data[listOfFiles[0]].rawFile,
    //   // uploadFileToBucket
    // )
    return uploadFileToBucket(params.data[listOfFiles[0]].rawFile, storageRef)
      .then((downloadURL) => {
        console.log("downloadURL: " + downloadURL)
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
      })
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
    return Promise.all(
      params.ids.map((id) => deleteDoc(doc(db, resource, id)))).then(() => ({
        data: params.ids
      })).catch((err) => Promise.reject(err));
    // return {
    //   data: params.ids.map((id) =>
    //     deleteDoc(doc(db, resource, params.id)).then(() => id)
    //   ),
    // }
  }
};

/**
 * Maps react-admin queries to Firebase
 *
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for a data response
 */
export const firestoreProvider = (type, resource, params) => {
  switch (type) {
    case GET_LIST: {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const filter = params.filter;
      // query all the docs from the first to page*perPage
      var q =
        field === "id"
          ? query(collection(db, resource), limit(page * perPage))
          : query(
            collection(db, resource),
            orderBy(field, order.toLowerCase()),
            limit(page * perPage)
          );
      // TODO: Add Filter
      //   if (filter) {
      //     q = Object.keys(filter).reduce(
      //       (q, k) => q.where(k, "==", filter[k]),
      //       q
      //     );
      //   }
      return getDocs(q).then((QuerySnapshot) => {
        // slice the results
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
      });
    }

    case GET_ONE: {
      return getDocs(collection(db, resource, params.id))
        .then((doc) => {
          if (doc.exists) {
            return { data: getDataWithId(doc) };
          } else {
            throw new Error({ message: "No such doc", status: 404 });
          }
        })
        .catch((error) => {
          throw new Error({ message: error, status: 404 });
        });
    }

    case UPDATE: {
      console.log("Update record id", params.id);
      return updateDoc(doc(db, resource, params.id), { ...params.data });
    }

    case CREATE: {
      // Check if there is a file to upload
      // var listOfFiles = Object.keys(params.data).filter(
      //   (key) => params.data[key].rawFile
      // );
      // return Promise.all(
      //   listOfFiles.map((key) => {
      //     // Upload file to the Storage bucket
      //     return createOrUpdateFile(
      //       resource,
      //       params.data[key].rawFile,
      //       uploadFileToBucket
      //     ).then((downloadURL) => {
      //       return { key: key, downloadURL: downloadURL };
      //     });
      //   })
      // ).then((arrayOfResults) => {
      //   arrayOfResults.map((keyAndUrl) => {
      //     // Remove rawFile attr as it will raise an error when setting the data
      //     delete params.data[keyAndUrl.key].rawFile;
      //     // Set the url to get the file
      //     params.data[keyAndUrl.key].downloadURL = keyAndUrl.downloadURL;
      //     return params.data;
      //   });

      if (type === CREATE) {
        console.log("Creating the data");
        return setDoc(doc(db, resource), {
          ...params.data,
        }).then((DocumentReference) =>
          DocumentReference.get().then((DocumentSnapshot) => {
            return { data: getDataWithId(DocumentSnapshot) };
          })
        );
      }

      // if (type === UPDATE) {
      //   console.log("Updating the data");
      //   return db
      //     .collection(resource)
      //     .doc(params.id)
      //     .set(params.data)
      //     .then(() => {
      //       return { data: params.data };
      //     });
      // }
      // });
    }
      break;
    case UPDATE_MANY: {
      // Will crash if there is a File Input in the params
      // TODO
      return params.ids.map((id) =>
        updateDoc(doc(db, resource, params.id), { ...params.data }).then(
          () => id
        )
      );
    }

    case DELETE: {
      console.log("Delete record id", params.id);
      return deleteDoc(doc(db, resource, params.id)).then(() => {
        return Promise.resolve();
      });
    }

    case DELETE_MANY: {
      return {
        data: params.ids.map((id) =>
          deleteDoc(doc(db, resource, params.id)).then(() => id)
        ),
      };
    }

    case GET_MANY: {
      // Do not use FireStore Ref because react-admin will not be able to create or update
      // Use a String field containing the ID instead

      return Promise.all(
        params.ids.map((id) => db.collection(resource).doc(id).get())
      ).then((arrayOfResults) => {
        return {
          data: arrayOfResults.map((documentSnapshot) =>
            getDataWithId(documentSnapshot)
          ),
        };
      });
    }

    case GET_MANY_REFERENCE: {
      const { target, id } = params;
      const { field, order } = params.sort;
      return db
        .collection(resource)
        .where(target, "==", id)
        .orderBy(field, order.toLowerCase())
        .get()
        .then((QuerySnapshot) => {
          return {
            data: QuerySnapshot.docs.map((DocumentSnapshot) =>
              getDataWithId(DocumentSnapshot)
            ),
            total: QuerySnapshot.docs.length,
          };
        });
    }

    default: {
      throw new Error(`Unsupported Data Provider request type ${type}`);
    }
  }
};

/**
 * Ultra simple authentication provider
 *
 * @param {string} type Request type, e.g AUTH_LOGI
 * @param {Object} params Request parameters. Includes login and pwd
 * @returns {Promise} the Promise for a data response
 */
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
