import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Collections from "../sections/Collections";
import FeaturedProducts from "../sections/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeVideoBanner/>
      <FeaturedProducts />
      <Collections />
      <Footer />
    </div>
  );
};

export default Home;
