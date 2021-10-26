import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import about from "../../../assets/header.jpg";
import Button from "../../Button";
import Heading from "../../Heading";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about: {
    margin: "30px",
  },
}));
function AboutHome() {
  const classes = useStyles({});
  return (
    <Grid className={classes.about}>
      <Heading title=" About Us" />
      <Grid container item style={{ display: "flex" }}>
        <Grid
          item
          lg={6}
          sm={12}
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img
            src={about}
            style={{
              width: "100%",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
            alt="about"
          />
        </Grid>
        <Grid item lg={1} sm={12}></Grid>
        <Grid
          item
          lg={5}
          sm={12}
          style={{
            order: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontSize: "1.825rem",
              fontWeight: 500,
              marginBottom: "15px",
              marginTop: "20px",
              fontFamily: "맑은 고딕",
            }}
          >
            The CraftJet
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "lighter",
              fontFamily: "맑은 고딕 ",
            }}
          >
            With strokes of perfection, oodles of creativity and revived
            heritage, originated the "Craftjet". An exclusive platform
            glorifying the incredibility of Indian Handicrafts, transmogrified
            into a range of alluring contemporary products. <br /> <br />
            We aim to prompt the incredible Indian heritage and its rich art
            form to reach the people at its ultimate grandeur all over the world
            with par excellence.
          </Typography>
          <Link to="/about">
            <Button title="Learn More" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutHome;
