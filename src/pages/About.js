import React from "react";
// import AboutUs from "../components/AboutUs/AboutUs";
// import AboutUs from "../components/AboutUs/AboutUs";
import AboutStory from "../components/Aboutus/AboutStory";
import AboutCraft from "../components/Aboutus/AboutCraft";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/Aboutus/AboutUs";
const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <AboutStory />
      <AboutCraft />
      <Footer></Footer>
    </div>
  );
};

export default About;
