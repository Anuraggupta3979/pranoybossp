import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebase from "../firebase";

const storage = getStorage(firebase);

export const getImageUrl = (fileName) => {
  return getDownloadURL(ref(storage, "images/" + fileName))
    .then((url) => url)
    .catch((error) => {
      console.log("error from getImageUrl:", error);
    });
};

export const getProductImageUrl = (fileName) => {
  return getDownloadURL(ref(storage, "products/" + fileName))
    .then((url) => url)
    .catch((error) => {
      console.log("error from getProductsUrl:", error);
    });
};
