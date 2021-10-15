import { collection, getDocs, where } from "firebase/firestore";
import { db } from "../firebase";

export const getAllCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  var lst = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    lst.push(doc.data());
  });

  return lst;
};

export const getProductsByCategory = async (categoryName) => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  var categoryId;
  var lst = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (categoryName === doc.data().name) {
      categoryId = doc.id;
    }
  });
  // console.log("getProductsByCategory")
  const q = await getDocs(
    collection(db, "products"),
    where("categoryId", "==", categoryId)
  );
  q.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    lst.push(doc.data());
  });
  return lst;
};
