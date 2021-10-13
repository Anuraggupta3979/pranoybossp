import React from "react";
import header from "../assets/header.jpg";
import { Grid, makeStyles, Typography } from "@material-ui/core";
function HomeVideoBanner() {
  return (
    <Grid>
      <img src={header} style={{ height: "100vh", width: "97vw" }} alt="" />
    </Grid>
  );
}

export default HomeVideoBanner;
