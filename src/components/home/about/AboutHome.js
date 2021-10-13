import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import about from "../../../assets/header.jpg";
import Button from "../../Button";
const useStyles = makeStyles((theme) => ({
  aboutMain: {
    marginTop: "50px",
  },
  about: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    objectFit: "contain",
    height: "500px",
  },
  text: {
    margin: "auto",
  },
  imgbox: {
    margin: "auto",
  },

  heading: {
    textAlign: "center",
    fontSize: "40px",
    
    marginTop: "30px",
  },
}));
function AboutHome() {
  const classes = useStyles({});
  return (
    <Grid className={classes.aboutMain}>
      <Typography className={classes.heading}>About Us</Typography>

      <Grid item className={classes.about}>
        <Grid className={classes.imgbox} item sm={5}>
          <img className={classes.image} src={about} alt="" />
        </Grid>
        <Grid className={classes.text} item sm={5}>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            fugit eum libero exercitationem nemo nisi dignissimos sequi
            temporibus! Ad accusantium earum suscipit veniam illum! Natus
            similique at omnis repellat dolorem quasi libero dolorum dolore,
            voluptate ea, magnam error esse labore, repudiandae magni iure dolor
            perspiciatis incidunt? Veritatis ex explicabo labore.
          </Typography>
          <Button title="Learn More" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutHome;
