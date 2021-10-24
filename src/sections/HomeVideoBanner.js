import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import HomeVideo from "../assets/homeVideo.mp4";
import "../assets/css/headerSection.css";
const useStyles = makeStyles((theme) => ({
  subHeading: {
    fontFamily: "맑은 고딕",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));
function HomeVideoBanner() {
  const classes = useStyles({});
  return (
    <Grid>
      <header className="topheader">
        <Grid className="overlay"></Grid>

        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          className="headerSection"
        >
          <source src={HomeVideo} type="video/mp4" />
        </video>

        <Grid className="container h-100">
          <Grid className="d-flex h-100 text-center align-items-center">
            <Grid className="w-100 text-white">
              <h1
                className="display-3"
                style={{ fontFamily: " Century Gothic  " }}
              >
                CraftJet
              </h1>
              <p className={classes.subHeading}>
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
