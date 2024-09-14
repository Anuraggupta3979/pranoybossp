import React from "react";
import Footer from "../components/footer/Footer";
// import Collections from "../components/home/collection/Collections";
import FeaturedProducts from "../components/home/product/FeaturedProducts";
import HomeVideoBanner from "../sections/HomeVideoBanner";
import AboutHeader from "../components/home/about/AboutHeader";
import AboutHome from "../components/home/about/AboutHome";
import Navbar from "../components/navbar/Navbar";
import { getFeaturedProducts } from "../helper/firestore";
import { Grid } from "@material-ui/core";
import Team from "../components/Team";
import CategoriesCard from "../components/home/collection/CategoriesCard";

const Home = ({ teamList, categoryList, productList }) => {
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
        <CategoriesCard />

        <AboutHome />
        {/* <Team teamList={teamList} /> */}
      </Grid>
      <Grid id="contact">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
