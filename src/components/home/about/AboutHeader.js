import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomButton from "../../Button";
const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
  aboutheading: {
    fontSize: "25px",
    // fontWeight: "bold",
    marginBottom: "30px",
  },
}));
function AboutHeader() {
  const classes = useStyles({});
  return (
    <Grid item className={classes.about}>
      <Grid item sm={4}>
        <Typography
          className={classes.aboutheading}
          style={{ fontFamily: ` "Poppins",sans-serif` }}
        >
          Adorning the traditional Creativity
        </Typography>

        <Typography
          style={{ fontFamily: `'Oswald', sans-serif`, fontSize: "20px" }}
        >
          We ensure to satiate your desire with the most exclusive handcraft
          collection, embracing the spirit of magnificent Indian Handicrafts.
          Revamp your surroundings with the authentic and intricate crafts by
          Craftjet.
        </Typography>
        <Link to="/about">
          <CustomButton title="Learn More" />
        </Link>
      </Grid>
    </Grid>
  );
}

export default AboutHeader;
