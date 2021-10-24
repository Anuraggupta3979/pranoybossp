import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    // fontWeight: "bold",
    fontSize: "2.525rem",
    fontFamily: "맑은 고딕",
    marginTop: "80px",
    marginBottom: "70px",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
}));
function Heading(props) {
  const classes = useStyles({});
  return (
    <Grid>
      <Typography variant="h4" className={classes.heading}>
        {props.title}
      </Typography>
    </Grid>
  );
}

export default Heading;
