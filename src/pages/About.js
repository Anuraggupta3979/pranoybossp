import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/Aboutus/AboutUs";
import AboutStory from "../components/Aboutus/AboutStory";
// import AboutCraft from "../components/Aboutus/AboutCraft";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <AboutStory />
      {/* <AboutCraft /> */}
      <Footer></Footer>
    </div>
  );
};

export default About;
