import React from "react";
import { useParams } from "react-router";
import { getProductByIdAndSimilarProducts } from "../helper/firestore";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Grid } from "@mui/material";
import ProductCard from "../components/home/product/ProductCard";

const style = {
  container: { display: "grid", justifyContent: "center" },
  image: {
    maxWidth: "40vw",
  },
  content: {
    marginTop: "30px",
  },
  imageAndContent: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
};

function ProductPage({ productList }) {
  const { productId } = useParams();
  let productData = {
    product: { id: "", name: "", image: "", description: "", categoryId: "" },
    similarProducts: [],
  };

  productData = getProductByIdAndSimilarProducts(
    productId,
    productList
  );
  return (
    <div style={style.container}>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div style={style.imageAndContent}>
        <img
          src={productData.product.image}
          alt={productData.product.name}
          style={style.image}
        />
        <div style={style.content}>
          <h1>{productData.product.name}</h1>
          <p>{productData.product.description}</p>
        </div>
      </div>
      <Grid>Similar Products</Grid>
      {productData.similarProducts.map((product) => {
        return (
          <ProductCard
            image={product.image}
            name={product.name}
            category={product.categoryId}
            desc={product.description}
            key={product.id}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default ProductPage;
