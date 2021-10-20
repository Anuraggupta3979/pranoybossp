import React from "react";
import header from "../assets/header.jpg";
import { Grid, Typography } from "@material-ui/core";
import abcd from "../assets/homeVideo.mp4";
import "../assets/css/HomeVideoBanner.css";
function HomeVideoBanner() {
  return (
    // <Grid className="header">
    //   {/* <img
    //     src={header}
    //     style={{
    //       height: "90vh",
    //       width: "100%",
    //       // objectFit: "cover",
    //       // marginTop: "50px",
    //     }}
    //     alt="header"
    //   /> */}
    //   <video
    //     playsinline="playsinline"
    //     autoplay="autoplay"
    //     muted="muted"
    //     loop="loop"

    //   >
    //     <source src={abcd} type="video/mp4" />
    //   </video>

    //   <Grid
    //     class="centered"
    //     style={{
    //       position: "absolute",
    //       top: "50%",
    //       left: "50%",
    //       transform: "translate(-50%. -50%)",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Typography
    //       style={{
    //         color: "white",
    //         fontSize: "40px",
    //         fontFamily: `font-family: "Sofia Pro",Poppins,sans-serif`,
    //       }}
    //     >
    //       Craftjet
    //     </Typography>
    //     <Typography
    //       style={{
    //         color: "white",
    //         fontSize: "20px",
    //         marginTop: "20px",
    //         fontFamily: `font-family: "Sofia Pro",Poppins,sans-serif`,
    //       }}
    //     >
    //       Adorning the traditional Creativity
    //     </Typography>
    //   </Grid>
    // </Grid>
    <Grid>
      <header>
        <div class="overlay"></div>

        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={abcd} type="video/mp4" />
        </video>

        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">CraftJet</h1>
              <p class="lead mb-0">Adorning the traditional Creativity</p>
            </div>
          </div>
        </div>
      </header>
    </Grid>
  );
}

export default HomeVideoBanner;
