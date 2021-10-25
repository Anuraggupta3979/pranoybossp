import {
  collection,
  getDocs,
  limit,
  getDoc,
  doc,
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
  return categoryList.filter(
    (category) =>
      category.name.toLowerCase().split(" ").join("-") === categoryId
  )[0];
};

export const getProductByIdAndSimilarProducts = (productId, productList) => {
  console.log(productList);
  const product = productList.filter((product) => product.id === productId)[0];
  console.log(product);
  const lst = getProductsByCategoryId(product.categoryId, productList);
  console.log({ product: product, similarProducts: lst });
  return { product: product, similarProducts: lst };
};

export const getProductsByCategoryId = (categoryId, productList) => {
  return productList.filter((product) => product.categoryId === categoryId);
};

/**
 * @param {integer} length (optional): amount of products to be returned
 * @return {Object} categories array sync with products array
 */
export const getAllProductsByCategory = (categoryList, productList) => {
  let categoryId = "";
  let productsArray = [];
  const categories = categoryList.map((category) => {
    categoryId = category.name.toLowerCase().split(" ").join("-");
    productsArray.push(
      productList.filter((product) => product.categoryId === categoryId)
    );
    return { categoryId, ...category };
  });

  return { categories: categories, productsArray: productsArray };
};
