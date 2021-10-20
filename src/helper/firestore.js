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

const getDataFromSnapshot = (querySnapshot) => {
  let lst = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    lst.push({ id: doc.id, ...doc.data() });
  });
  return lst;
};

export const getAllDocs = async (resource, length = null) => {
  var querySnapshot;
  if (length === null) querySnapshot = await getDocs(collection(db, resource));
  else
    querySnapshot = await getDocs(
      query(collection(db, resource), limit(length))
    );
  return getDataFromSnapshot(querySnapshot);
};

export const getFeaturedProducts = (productList) => {
  let lst = [];
  productList.forEach((product) => {
    if (product.featured) lst.push(product);
  });
  return lst;
};

export const getDocById = async (resource, docId) => {
  const docInstance = await getDoc(doc(db, resource, docId));
  // console.log(docInstance.data());
  const object = { id: docInstance.id, ...docInstance.data() };
  return object;
};

export const getCategoryById = (categoryList, categoryId) => {
  categoryList.forEach((category) => {
    if (category.title.toLowerCase().split(" ").join("-") === categoryId)
      return { id: categoryId, ...category };
  });
};

export const getProductByIdAndSimilarProducts = async (productId) => {
  try {
    const product = await getDocById("products", productId);
    console.log(product);
    const lst = await getProductsByCategory(product.categoryId);
    console.log({ product: product, similarProducts: lst });
    return { product: product, similarProducts: lst };
  } catch (e) {
    throw new Error(e);
  }
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
  let lst = getDataFromSnapshot(querySnapshot);
  if (lst.length === 0) throw new Error("no products with this categoryId");
  return lst;
};

/**
 * @param {integer} length (optional): amount of products to be returned
 * @return {Object} categories array sync with products array
 */
export const getAllProductsByCategory = (categoryList, productList) => {
  let categoryId = "";
  let productsArray = [];
  const categories = categoryList.map((category) => {
    categoryId = category.title.toLowerCase().split(" ").join("-");
    productsArray.push(productList.filter((product) => product.filter));
    return { categoryId, ...category };
  });

  return { categories: categories, productsArray: productsArray };
};
