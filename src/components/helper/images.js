import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebase from "../../firebase"

const storage = getStorage(firebase);

const getImageUrl = (fileName) => {
  getDownloadURL(ref(storage, "images/" + fileName))
    .then((url) => {
      console.log(url);
      return url;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getImageUrl;
