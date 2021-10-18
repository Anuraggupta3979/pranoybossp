import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "30px",
    padding: "0px",
    border: "2px solid #23232c",
    color: "#23232c",
    width: "200px",
    transition: ".5s",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "40px",
    maxWidth: "150px",
    display: "inline-block",
    cursor: "pointer",
    fontFamily: `"Poppins",sans-serif`,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));
function CustomButton(props) {
  const classes = useStyles({});
  return (
    <Grid>
      <Button className={classes.button}>{props.title}</Button>
    </Grid>
  );
}

export default CustomButton;
