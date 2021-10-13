import React from "react";
// import AboutUs from "../components/AboutUs/AboutUs";
// import AboutUs from "../components/AboutUs/AboutUs";
// import AboutStory from "../components/AboutUs/AboutStory";
// import AboutCraft from "../components/AboutUs/AboutCraft";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
// import AboutUs from "../components/AboutUs/AboutUs";
import AboutUs from "../components/Aboutus/AboutUs";
// import AboutStory from "../components/AboutUs/AboutStory";
// import AboutCraft from "../components/AboutUs/AboutCraft";
import AboutStory from "../components/Aboutus/AboutStory";
import AboutCraft from "../components/Aboutus/AboutCraft";

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
