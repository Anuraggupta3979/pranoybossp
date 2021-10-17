import React from "react";
import header from "../assets/header.jpg";
import { Grid, image } from "@material-ui/core";
function HomeVideoBanner() {
  return (
    <Grid>
      <img src={header} style={{ height: "90vh",width: "100%" , objectFit:'cover'}} alt="header" />
    </Grid>
  );
}

export default HomeVideoBanner;
