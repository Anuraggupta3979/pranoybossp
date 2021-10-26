import React from "react";
// import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { getProductByIdAndSimilarProducts } from "../helper/firestore";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Grid } from "@mui/material";
import ProductCard from "../components/home/product/ProductCard";
// import { getAllDocs } from "../helper/firestore";

import Heading from "../components/Heading";

const ProductPage = ({ productList }) => {
  console.log(productList);
  // const [productData, setProductData] = useState({
  //   product: {
  //     id: "",
  //     name: "",
  //     image: "",
  //     description: "",
  //     categoryId: "",
  //     material: "",
  //     weight: "",
  //     dimensions: "",
  //   },
  //   similarProducts: [],
  // });
  const { productId } = useParams();
  // const getProductData = () => {
  const productData = productList.filter(
    (product) => product.id === productId
  )[0];
  // console.log(productData);
  // };
  // useEffect(() => {
  //   //   getAllDocs("products")
  //   //     .then((data) => {
  //   //       setProductList(data);
  //   //       setProductData(
  //   //         getProductByIdAndSimilarProducts(productId, productList)
  //   //       );
  //   //     })
  //   //     .catch((e) => console.log(e));
  //   const pr = productList.filter(
  //     (product) => productId === product.toLowerCase().split(" ").join("-")
  //   );
  //   console.log({ pr });
  // }, [productList]);
  const style = {
    container: { display: "grid", justifyContent: "center" },
    main: {
      display: "flex",
      marginTop: "80px",
      justifyContent: "space-around",
      bgcolor: "background.paper",
    },
    image: {
      width: "99.9%",
      height: "655px",
      objectFit: "cover",
    },

    imageAndContent: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
    },
    content: {
      marginTop: "30px",
      display: "grid",
      justifyContent: "center",
      // alignItems: "space-between",
      width: "1000px",
      textAlign: "center",
    },
    title: {
      fontSize: "20px",
      letterSpacing: "1px",
      fontFamily: "맑은 고딕",
      marginTop: "1px",
    },
    description: {
      fontSize: "18px",
      color: "rgb(135,134,136)",
      marginLeft: "10px",
      marginRight: "10px",
      fontFamily: "맑은 고딕",
    },
    extraInfo: {
      display: "flex",
      flexDirection: "column",
      flexFlow: "column wrap",
      justifyContent: "center",
    },
    tag: {
      color: "rgb(135,134,136)",
      padding: "10px",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
  };
  console.log({ productList });

  return (
    <Grid>
      <Navbar />
      <Grid container item style={style.main}>
        <Grid item lg={5} sm={12} xs={12}>
          <img
            src={productData.image}
            alt={productData.name}
            style={style.image}
          />
        </Grid>
        <Grid lg={6} sm={12} xs={12} style={style.content}>
          <p style={style.title}>{productData.name}</p>
          <p style={style.description}>{productData.description}</p>
          <hr style={{ width: "50%", margin: "auto" }} />
          <Grid style={style.extraInfo}>
            <Grid style={style.tag}>Category : {productData.name}</Grid>
            {productData.material ? (
              <Grid style={style.tag}>Material : {productData.material}</Grid>
            ) : (
              <></>
            )}
            {productData.weight ? (
              <Grid style={style.tag}>Weight : {productData.weight}</Grid>
            ) : (
              <></>
            )}
            {productData.dimensions ? (
              <Grid style={style.tag}>
                Dimension : {productData.dimensions}
              </Grid>
            ) : (
              <></>
            )}
            <Grid style={style.tag}>*product dimensions may vary</Grid>
          </Grid>
        </Grid>
      </Grid>

      <Heading title="Similar Products"></Heading>

      <Grid
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
        }}
      >
        {/* {productData.similarProducts.map((product) => {
          return (
            <ProductCard
              image={product.image}
              name={product.name}
              category={product.categoryId}
              desc={product.description}
              key={product.id}
            />
          );
        })} */}
      </Grid>

      <Footer />
    </Grid>
  );
};

export default ProductPage;
