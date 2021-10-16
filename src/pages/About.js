import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/Aboutus/AboutUs";
import AboutStory from "../components/Aboutus/AboutStory";
import { Grid } from "@material-ui/core";
import Categories from "../components/Aboutus/Categories";
import Team from "../components/Team"
const About = () => {
  return (
    <Grid>
      <Navbar />
      <AboutUs />
      <Grid style={{ width: "80%", margin: "auto" }}>
        <AboutStory />
        <Categories></Categories>
        <Team></Team>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default About;
