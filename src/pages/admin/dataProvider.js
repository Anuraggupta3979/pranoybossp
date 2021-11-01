import axios from "axios";
import { BACKEND_URL, BUCKET_NAME } from "../../config";
// import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../../aws";

axios.defaults.baseURL = BACKEND_URL;
axios.defaults.headers = {
  "Content-Type": "application/json",
};

const uploadFileToBucket = async (rawFile) => {
  const uploadParams = {
    Bucket: BUCKET_NAME,
    Key: rawFile.name,
    Body: rawFile,
  };
  try {
    await s3.upload(uploadParams, function (err, data) {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully.`);
      console.table(data.Location);
    });
    return `https://${BUCKET_NAME}.s3.amazonaws.com/${uploadParams.Key}`;
  } catch (err) {
    console.log("Error", err);
  }
};

export const myDataProvider = {
  getList: (resource, params) => {
    return axios
      .get(resource)
      .then((response) => ({ ...response.data }))
      .catch((error) => Promise.reject(error));
  },
  getOne: (resource, params) => {
    console.log("getOne", params.id);
    return axios
      .get(`${resource}/${params.id}`, params.data)
      .then((response) => ({ ...response.data }))
      .catch((error) => Promise.reject(error));
  },
  getMany: (resource, params) => {
    console.log("getMany", params.ids);
    return Promise.all(params.ids.map((id) => axios.get(`${resource}/${id}`)))
      .then((arrayOfResults) => {
        return {
          data: arrayOfResults.map((response) => {
            return response.data.data;
          }),
        };
      })
      .catch((err) => Promise.reject(err));
    // return Promise.all(params.ids.map((id) => getDoc(doc(db, resource, id))))
    //   .then((arrayOfResults) => {
    //     return {
    //       data: arrayOfResults.map((documentSnapshot) =>
    //         getDataWithId(documentSnapshot)
    //       ),
    //     };
    //   })
    //   .catch((err) => Promise.reject(err));
    // return Promise;
  },
  getManyReference: (resource, params) => {
    console.log("getManyReference");
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
    return Promise;
  },
  create: async (resource, params) => {
    let { image, ...data } = params.data;
    console.log(`create`);
    if (!image) return Promise.reject("Upload a Image First");
    // console.log({ rawFile: image.rawFile });
    const dataLocation = await uploadFileToBucket(image.rawFile);
    console.log(dataLocation);
    data.image = dataLocation;
    // console.table(data);
    return axios
      .post(resource, data)
      .then((response) => ({ ...response.data }))
      .catch((error) => Promise.reject(error));
  },
  update: (resource, params) => {
    console.log("Update record id", params.id);
    const { id, ...everythingElse } = params.data;
    return axios
      .put(`${resource}/${id}`, everythingElse)
      .then((response) => ({ ...response.data }))
      .catch((error) => Promise.reject(error));
  },
  updateMany: (resource, params) => Promise,
  delete: async (resource, params) => {
    try {
      console.log("Delete record id", params.id);
      let response = await axios.delete(`${resource}/${params.id}`);
      return { ...response.data };
    } catch (error) {
      return Promise.reject(error);
    }
  },
  deleteMany: (resource, params) => {
    console.log("Delete Many", params.ids);
    return Promise.all(
      params.ids.map((id) => axios.delete(`${resource}/${id}`))
    )
      .then(() => ({
        data: params.ids,
      }))
      .catch((err) => Promise.reject(err));
  },
};
