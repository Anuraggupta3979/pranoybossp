import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AboutStory from "../components/Aboutus/AboutStory";
import { Grid } from "@material-ui/core";
import Categories from "../components/Aboutus/Categories";
import Team from "../components/Team";
import HeaderSection from "../sections/HeaderSection";
import HeaderImage from "../assets/header.jpg";
const About = ({ categoryList, teamList }) => {
  return (
    <Grid>
      <Navbar />
      <HeaderSection
        image={HeaderImage}
        title="About Us"
        subtitle="This Is About Page"
      />
      <Grid style={{ width: "90vw", margin: "auto" }}>
        <AboutStory />
        <Categories categoryList={categoryList} />
        <Team teamList={teamList} />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default About;
