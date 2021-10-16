import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getDocById, getProductsByCategory } from "../helper/firestore";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Grid } from "@mui/material";
import ProductCard from "../components/home/product/ProductCard";

function ProductPage() {
  const { productId } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    categoryId: "",
  });
  const [similarProducts, setSimilarProducts] = useState([]);
  const getData = async () => {
    try {
      console.log(productId);
      const lst = await getDocById("products", productId);
      setProduct(lst);
      // const data = await getProductsByCategory(product.categoryId);
      // setSimilarProducts(data);
      // console.log(similarProducts);
    } catch (err) {
      console.log("error", err);
      // history.push(`/`)
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      {/* <Grid>Similar Products</Grid>
      {similarProducts.map((product) => {
        <ProductCard
          image={product.image}
          name={product.name}
          category={product.categoryId}
          desc={product.description}
          key={product.name}
        />;
      })} */}
      <Footer />
    </>
  );
}

export default ProductPage;
