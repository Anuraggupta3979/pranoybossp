import React from "react";
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  newsletter: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  titlebox: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  mailbox: {
    display: "flex",
    marginTop: "50px",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: "30px",
    },
  },
  textfield: {
    width: "40vw",
  },
  button: {
    backgroundColor: "transparent",
    // "&:hover": {
    //   borderBottom: "2px solid black",
    // },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      backgroundColor: "black",
      opacity: "0.5",
      color: "white",
      marginBottom: "20px",
    },
  },
}));
function Newsletter() {
  const classes = useStyles({});
  return (
    <Grid item>
      <Grid item>
        <Typography>Get timely updates from your favorite products</Typography>
      </Grid>
      <Grid item className={classes.mailbox}>
        <Grid item>
          <TextField type="email" placeholder=" your mail adddress"></TextField>
        </Grid>
        <Grid item>
          <Button className={classes.button}>Subscribe</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Newsletter;
