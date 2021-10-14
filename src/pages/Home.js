import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import Newsletter from "../components/newsletter/Newsletter";
import { getAllCategories } from "../helper/categories";
import { getAllProducts } from "../helper/products";

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategoryList(data);
      // console.log(categoriesList);
    });
    getAllProducts().then((data) => {
      setProductList(data);
      // console.log(Array);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <HomeVideoBanner />
      <AboutHeader />
      <FeaturedProducts productList={productList} />
      <Collections categoryList={categoryList} />
      <AboutHome></AboutHome>
      <Newsletter></Newsletter>
      <Footer />
    </div>
  );
};

export default Home;
