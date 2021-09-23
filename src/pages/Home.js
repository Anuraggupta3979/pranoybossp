import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Collections from "../sections/Collections";
import FeaturedProducts from "../sections/FeaturedProducts";
import FrontCarousel from "../sections/FrontCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FrontCarousel/>
      <FeaturedProducts />
      <Collections />
      <Footer />
    </div>
  );
};

export default Home;
