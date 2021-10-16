import {
  collection,
  getDocs,
  limit,
  getDoc,
  doc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

export const getAllDocs = async (resource, length = null) => {
  var querySnapshot;
  if (length === null) querySnapshot = await getDocs(collection(db, resource));
  else
    querySnapshot = await getDocs(
      query(collection(db, resource), limit(length))
    );
  var lst = [];
  var object = {};
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    object = { id: doc.id, ...doc.data() };
    lst.push(object);
  });
  return lst;
};

export const getDocById = async (resource, docId) => {
  const docInstance = await getDoc(doc(db, resource, docId));
  // console.log(docInstance.data());
  const object = { id: docInstance.id, ...docInstance.data() };
  return object;
};
export const getAllCategory = async (resource, docId) => {
  const docInstance = await getDocs(collection(db, "category"));
  // console.log(docInstance.data());
  console.log(docInstance);
  // return object;
};

export const getProductsByCategory = async (categoryId) => {
  var querySnapshot = await getDocs(
    query(collection(db, "products"), where("categoryId", "==", categoryId))
  );
  var lst = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    var object = { id: doc.id, ...doc.data() };
    lst.push(object);
  });
  if (lst.length === 0) throw new Error("no products with this categoryId");
  return lst;
};

export const getAllProductsByCategory = async (length = 4) => {
  const categories = await getAllDocs("categories");
  const productsArray = [];
  // var querySnapshot
  var lst;
  // var object
  for (const category of categories) {
    console.log(category.id);
    var querySnapshot = await getDocs(
      query(
        collection(db, "products"),
        where("categoryId", "==", category.id),
        limit(length)
      )
    );
    lst = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      var object = { id: doc.id, ...doc.data() };
      lst.push(object);
    });
    console.log(lst);
    productsArray.push(lst);
  }
  return { categories: categories, productsArray: productsArray };
};
