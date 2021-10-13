import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import about from "../../../assets/header.jpg";
const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
  },
  imgage: {
    width: "100%",
    objectFit: "contain",
    height: "500px",
  },
}));
function AboutHome() {
  const classes = useStyles({});
  return (
    <Grid item className={classes.about}>
      <Grid item sm={5}>
        <img className={classes.imgage} src={about} alt="" />
      </Grid>
      <Grid item sm={5}>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum fugit
          eum libero exercitationem nemo nisi dignissimos sequi temporibus! Ad
          accusantium earum suscipit veniam illum! Natus similique at omnis
          repellat dolorem quasi libero dolorum dolore, voluptate ea, magnam
          error esse labore, repudiandae magni iure dolor perspiciatis incidunt?
          Veritatis ex explicabo labore. z
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AboutHome;
