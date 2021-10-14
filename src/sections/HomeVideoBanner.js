import React from "react";
import header from "../assets/header.jpg";
import { Grid } from "@material-ui/core";
function HomeVideoBanner() {
  return (
    <Grid>
      <img src={header} style={{ height: "100vh", width: "98.7vw" , objectFit:'cover'}} alt="" />
    </Grid>
  );
}

export default HomeVideoBanner;
