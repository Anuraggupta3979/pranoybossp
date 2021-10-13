import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import About from "../components/home/about/About";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeVideoBanner />
      <About />
      <FeaturedProducts />
      <Collections />
      <Footer />
    </div>
  );
};

export default Home;
