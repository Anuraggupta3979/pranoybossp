import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AboutStory from "../components/Aboutus/AboutStory";
import { Grid } from "@material-ui/core";
import Categories from "../components/Aboutus/Categories";
import Team from "../components/Team";
import HomeVideoBanner from "../sections/HomeVideoBanner";

const About = () => {
  return (
    <Grid>
      <Navbar />
      <HomeVideoBanner></HomeVideoBanner>
      <Grid style={{ width: "90vw", margin: "auto" }}>
        <AboutStory />

        <Categories></Categories>
        <Team></Team>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default About;
