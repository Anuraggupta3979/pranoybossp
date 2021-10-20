import React from "react";
import { Grid } from "@material-ui/core";
import abcd from "../assets/homeVideo.mp4";
import "../assets/css/HomeVideoBanner.css";

function HomeVideoBanner() {
  return (
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
