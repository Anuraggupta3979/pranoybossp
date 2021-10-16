import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/home/product/ProductCard";
import CustomButton from "../components/Button";
import Footer from "../components/footer/Footer";
import { getAllProductsByCategory } from "../helper/firestore";

const style = {
  height: "80%",
  width: "98.7vw",
};

const Categories = () => {
  const [productDict, setProductDict] = useState({
    categories: [],
    productsArray: []
  });

  const getData = async () => {
    const data = await getAllProductsByCategory()
    setProductDict(data)
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => { console.log(productDict) }, [productDict]);
  const ProductCards = ({ productList }) => {
    console.log(productList)
    return (
      <>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
          }}
        >
          {productList.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              category={product.categoryId}
              desc={product.description}
              key={product.name}
            />
          ))}

        </div>
        <br />
        <CustomButton title="Learn More" />
      </>
    )
  }
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Navbar />
      {productDict.categories.map((category, index) => (
        <>
          <img src={category.image} alt="#!" style={style} />
          <ProductCards productList={productDict.productsArray[index]} />
        </>
      ))}
      {/* {JSON.stringify(productDict.categories)} */}
      <Footer />
    </div>
  );
};

export default Categories;
