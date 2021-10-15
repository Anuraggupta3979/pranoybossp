import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import { getAllCategories } from "../helper/categories";
import Navbar from "../components/navbar/Navbar";
import Team from "../components/Team";


const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategoryList(data);
      console.log(data);
    });
  }, []);
  

  console.log(productList)
  return (
    <div>
      <Navbar></Navbar>
      <HomeVideoBanner />
      <AboutHeader />
      <FeaturedProducts  />
      <Collections categoryList={categoryList} />
      <AboutHome></AboutHome>
      <Team></Team>
      <Footer />
    </div>
  );
};

export default Home;
