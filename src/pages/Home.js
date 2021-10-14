import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import { getAllCategories } from "../helper/categories";
import { getAllProducts } from "../helper/products";

import Team from "../components/Team";
import Navv from "../components/navbar/Navv";

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategoryList(data);
      console.log(data);
    });
  }, []);
  
  useEffect(() => {
    const anu = getAllProducts().then((anurag) => {
      console.log(anurag);
    });
    console.log(anu);
    setProductList(anu);
    // getAllProducts().then((abcd) => {
    //   setProductList(abcd);
    //   console.log(abcd);
    // });
  }, []);
  console.log(productList)
  return (
    <div>
      {/* <Navbar /> */}
      <Navv></Navv>
      <HomeVideoBanner />
      <AboutHeader />
      {/* <FeaturedProducts productList={productList} /> */}
      <Collections categoryList={categoryList} />
      <AboutHome></AboutHome>
      <Team></Team>
      <Footer />
    </div>
  );
};

export default Home;
