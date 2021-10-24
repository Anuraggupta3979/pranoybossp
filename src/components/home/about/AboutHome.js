import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import about from "../../../assets/header.jpg";
import Button from "../../Button";
import Heading from "../../Heading";
const useStyles = makeStyles((theme) => ({
  about: {
    margin: "30px",
  },
}));
function AboutHome() {
  const classes = useStyles({});
  return (
    // <Grid>
    //   <Typography>About Us</Typography>
    //   <Grid className={classes.about}>
    //     <Grid item sm={6} className={classes.imagebox}>
    //       <img className={classes.image} src={about} alt="" />
    //     </Grid>
    //     <Grid item sm={6} className={classes.abouttext}>
    //       <Grid item>
    //         <Typography className={classes.aboutheading}>About Us</Typography>
    //       </Grid>
    //       <Grid item>
    //         <Typography>
    //           About Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //           Cupiditate vitae pariatur aut esse enim. Maxime quibusdam
    //           voluptate blanditiis inventore veniam quasi id exercitationem
    //           pariatur dolorum magnam provident nobis, aliquam illum neque,
    //           labore voluptatum perferendis quae laboriosam minus nisi totam
    //           nihil ullam commodi. Error alias distinctio provident at nisi rem
    //           id!
    //         </Typography>
    //       </Grid>
    //       <Grid item>
    //         <Button title="Learn More" />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
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
            Craftjet
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

          <Button title="Learn More" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutHome;
