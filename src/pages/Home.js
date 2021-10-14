import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import Newsletter from "../components/newsletter/Newsletter";
import { getAllProducts } from "../helper/categories";

const Home = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setCategoriesList(data);
      // console.log(categoriesList);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <HomeVideoBanner />
      <AboutHeader />
      <FeaturedProducts />
      <Collections categoriesList={categoriesList} />
      <AboutHome></AboutHome>
      <Newsletter></Newsletter>
      <Footer />
    </div>
  );
};

export default Home;
