import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  var lst = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    lst.push(doc.data());
  });
  return lst;
};
