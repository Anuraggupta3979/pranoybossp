import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import Newsletter from "../components/newsletter/Newsletter";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeVideoBanner />
      <AboutHeader />
      <FeaturedProducts />
      <Collections />
      <AboutHome></AboutHome>
      <Newsletter></Newsletter>
      <Footer />
    </div>
  );
};

export default Home;
