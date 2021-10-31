import axios from "axios";
import BACKEND_URL from "../../backendUrl";

axios.defaults.baseURL = BACKEND_URL;
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const myDataProvider = {
  getList: (resource, params) => {
    return axios
      .get(`product`)
      .then((response) => ({...response.data}))
      .catch((error) => Promise.reject(error));
  },
  getOne: (resource, params) => {
    // console.log("getOne", params.id);
    // return getDoc(doc(db, resource, params.id))
    //   .then((doc) => {
    //     if (doc.exists()) {
    //       return { data: getDataWithId(doc) };
    //     } else {
    //       throw new Error({ message: "No such doc", status: 404 });
    //     }
    //   })
    //   .catch((error) => {
    //     throw new Error({ message: error, status: 404 });
    //   });
  },
  getMany: (resource, params) => {
    // console.log("getMany", params.ids);
    // return Promise.all(params.ids.map((id) => getDoc(doc(db, resource, id))))
    //   .then((arrayOfResults) => {
    //     return {
    //       data: arrayOfResults.map((documentSnapshot) =>
    //         getDataWithId(documentSnapshot)
    //       ),
    //     };
    //   })
    //   .catch((err) => Promise.reject(err));
  },
  getManyReference: (resource, params) => {
    // console.log("getManyReference");
    // const { target, id } = params;
    // const { field, order } = params.sort;
    // return getDocs(
    //   query(
    //     collection(db, resource),
    //     where(target, "==", id),
    //     orderBy(field, order.toLowerCase())
    //   )
    // )
    //   .then((QuerySnapshot) => {
    //     console.log("getManyReference", QuerySnapshot);
    //     return {
    //       data: QuerySnapshot.docs.map((DocumentSnapshot) =>
    //         getDataWithId(DocumentSnapshot)
    //       ),
    //       total: QuerySnapshot.docs.length,
    //     };
    //   })
    //   .catch((err) => Promise.reject(err));
  },
  create: (resource, params) => {
    // const key = params.data.name.toLowerCase().split(" ").join("-");
    // console.log(`create key: ${key}`);
    // var listOfFiles = Object.keys(params.data).filter(
    //   (key) => params.data[key].rawFile
    // );
    // var storageRef = ref(
    //   storage,
    //   resource + "/" + params.data[listOfFiles[0]].rawFile.name
    // );
    // console.log(listOfFiles);
    // if (listOfFiles.length === 0) return Promise.reject("Upload a Image First");
    // return uploadFileToBucket(
    //   params.data[listOfFiles[0]].rawFile,
    //   storageRef
    // ).then((downloadURL) => {
    //   console.log("downloadURL: " + downloadURL);
    //   delete params.data[listOfFiles[0]].rawFile;
    //   params.data.image = downloadURL;
    //   return setDoc(doc(db, resource, key), {
    //     ...params.data,
    //   })
    //     .then((DocumentReference) => {
    //       console.log(DocumentReference);
    //       return {
    //         data: { id: key, ...params.data },
    //       };
    //     })
    //     .catch((err) => Promise.reject(err));
    // });
  },
  update: (resource, params) => {
    // console.log("Update record id", params.id);
    // const { id, ...everythingElse } = params.data;
    // return setDoc(doc(db, resource, id), {
    //   ...everythingElse,
    // })
    //   .then((DocumentReference) => {
    //     console.log(DocumentReference);
    //     return {
    //       data: { id: params.id, ...params.data },
    //     };
    //   })
    //   .catch((err) => Promise.reject(err));
  },
  updateMany: (resource, params) => Promise,
  delete: (resource, params) => {
    // console.log("Delete record id", params.id);
    // const { id } = params.previousData;
    // return deleteDoc(doc(db, resource, id))
    //   .then(() => ({ data: params.previousData }))
    //   .catch((err) => Promise.reject(err));
  },
  deleteMany: (resource, params) => {
    // console.log("Delete Many", params.ids);
    // return Promise.all(params.ids.map((id) => deleteDoc(doc(db, resource, id))))
    //   .then(() => ({
    //     data: params.ids,
    //   }))
    //   .catch((err) => Promise.reject(err));
  },
};
