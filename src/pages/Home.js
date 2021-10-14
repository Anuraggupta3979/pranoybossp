import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import { getAllProducts } from "../helper/categories";
import Team from "../components/Team";
import Navv from "../components/navbar/Navv";

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
      {/* <Navbar /> */}
      <Navv></Navv>
      <HomeVideoBanner />
      <AboutHeader />
      <FeaturedProducts />
      <Collections categoriesList={categoriesList} />
      <AboutHome></AboutHome>
      <Team></Team>
      <Footer />
    </div>
  );
};

export default Home;
