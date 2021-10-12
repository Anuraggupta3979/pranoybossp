import React from "react";
// import AboutUs from "../components/AboutUs/AboutUs";
// import AboutUs from "../components/AboutUs/AboutUs";
import AboutStory from "../components/Aboutus/AboutStory";
import AboutCraft from "../components/Aboutus/AboutCraft";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <AboutUs /> */}
      <AboutStory />
      <AboutCraft />
    </div>
  );
};

export default About;
