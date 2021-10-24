import React from "react";
import { Grid } from "@material-ui/core";
import HomeVideo from "../assets/homeVideo.mp4";
import "../assets/css/HomeVideoBanner.css";

function HomeVideoBanner() {
  return (
    <Grid>
      <header>
        <Grid className="overlay"></Grid>

        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={HomeVideo} type="video/mp4" />
        </video>

        <Grid className="container h-100">
          <Grid className="d-flex h-100 text-center align-items-center">
            <Grid className="w-100 text-white">
              <h1
                className="display-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                CraftJet
              </h1>
              <p
                style={{ fontFamily: "'Oswald', sans-serif" }}
                className="lead mb-0"
              >
                Adorning the Traditional Creativity
              </p>
            </Grid>
          </Grid>
        </Grid>
      </header>
    </Grid>
  );
}

export default HomeVideoBanner;
