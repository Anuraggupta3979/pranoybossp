import { collection, getDocs, limit, getDoc, doc, where, query } from "firebase/firestore";
import { db } from "../firebase";

export const getAllDocs = async (resource, length = null) => {
  var querySnapshot
  if (length === null)
    querySnapshot = await getDocs(collection(db, resource));
  else
    querySnapshot = await getDocs(collection(db, resource), limit(length));
  var lst = [];
  var object = {}
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    object = { id: doc.id, ...doc.data() }
    lst.push(object);
  });
  return lst;
};

export const getDocByID = async (resource, docId) => {
  const docInstance = await getDoc(doc(db, resource, docId))
  console.log(docInstance)
  return docInstance;
}

export const getAllProductsByCategory = async (length = 4) => {
  const categories = await getAllDocs("categories")
  const productsArray = []
  // var querySnapshot
  var lst
  // var object
  for (const category of categories) {
    console.log(category.id)
    var querySnapshot = await getDocs(
      query(collection(db, "products"),
        where("categoryId", "==", category.id),
        limit(length)
      ))
    lst.length = 0
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      var object = { id: doc.id, ...doc.data() }
      lst.push(object);
    });
    console.log(lst)
    productsArray.push(lst)
  }
  return { categories: categories, productsArray: productsArray }
};

