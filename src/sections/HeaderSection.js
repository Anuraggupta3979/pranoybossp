import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import "../assets/css/headerSection.css";
const useStyles = makeStyles((theme) => ({
  subHeading: {
    // fontFamily: "맑은 고딕",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));
function HeaderSection(props) {
  const classes = useStyles({});
  return (
    <Grid>
      <header>
        <Grid className="overlay"></Grid>

        <Grid className="headerSection">
          <img
            style={{ width: "100%", height: "100vh" }}
            src={props.image}
            alt=""
          />
        </Grid>

        <Grid className="container h-100">
          <Grid className="d-flex h-100 text-center align-items-center">
            <Grid className="w-100 text-white">
              <h1
                className="display-3"
                style={{ fontFamily: " Century Gothic  " }}
              >
                {props.title}
              </h1>
              <p className={classes.subHeading}>{props.subtitle}</p>
            </Grid>
          </Grid>
        </Grid>
      </header>
    </Grid>
  );
}

export default HeaderSection;
