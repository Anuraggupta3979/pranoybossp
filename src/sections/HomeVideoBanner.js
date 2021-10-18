import React from "react";
import header from "../assets/header.jpg";
import { Grid, Typography } from "@material-ui/core";
function HomeVideoBanner() {
  return (
    <Grid>
      <img
        src={header}
        style={{
          height: "90vh",
          width: "100%",
          objectFit: "cover",
          marginTop: "50px",
        }}
        alt="header"
      />

      <Grid
        class="centered"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%. -50%)",
        }}
      >
        <Typography
          style={{
            color: "white",
            fontSize: "40px",
            fontFamily: `font-family: "Sofia Pro",Poppins,sans-serif`,
          }}
        >
          Craftjet
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: "20px",
            marginTop:"20px",
            fontFamily: `font-family: "Sofia Pro",Poppins,sans-serif`,
          }}
        >
          Adorning the traditional Creativity
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HomeVideoBanner;
