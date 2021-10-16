import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import Navbar from "../components/navbar/Navbar";
import { getAllDocs, getProductsByCategory } from "../helper/categories";

import Team from "../components/Team";

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllDocs("categories").then((data) => {
      setCategoryList(data);
      // console.log(data);
    });
    getAllDocs("products").then((data) => {
      setProductList(data);
      // console.log(productList);
    });
    getProductsByCategory("1");
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <HomeVideoBanner />
      <AboutHeader />
      <FeaturedProducts productList={productList} />
      <Collections categoryList={categoryList} />
      <AboutHome></AboutHome>
      <Team></Team>
      <Footer />
    </div>
  );
};

export default Home;
