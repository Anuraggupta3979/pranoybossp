import React from "react";
import Footer from "../components/footer/Footer";
import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import Navbar from "../components/navbar/Navbar";
import { getFeaturedProducts } from "../helper/firestore";
import { Grid } from "@material-ui/core";
import Team from "../components/Team";

const Home = ({ teamList, categoryList, productList }) => {
  console.log(categoryList);
  return (
    <Grid>
      <Navbar />
      {/* <Grid style={{ marginTop: "70px" }}> */}
      <Grid>
        <HomeVideoBanner />
      </Grid>
      <Grid style={{ width: "97%", margin: "auto" }}>
        <AboutHeader />
        <FeaturedProducts productList={getFeaturedProducts(productList)} />
        
        <Collections categoryList={categoryList} />
        <AboutHome />
        <Team teamList={teamList} />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Home;
