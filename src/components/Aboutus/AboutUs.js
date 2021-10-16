import React, { useEffect, useState } from "react";
import "../../assets/css/About.css";
import { Grid, makeStyles } from "@material-ui/core";

import { getImageUrl } from "../../helper/images";
const useStyles = makeStyles((theme) => ({
  screen: {
    objectFit: "contain",
    width: "100%",
    height: "100vh",
    display: "block",
  },
}));
function AboutUs() {
  const classes = useStyles({});
  const [bannerUrl, setBannerUrl] = useState("");
  useEffect(() => {
    getImageUrl("about-banner.jpg").then((url) => {
      console.log(url);
      setBannerUrl(url);
    });
  }, []);
  return (
    <Grid>
      <Grid className="containerabout">
        <img src={bannerUrl} alt="Snow" className={classes.screen} />
      </Grid>
    </Grid>
  );
}

export default AboutUs;
