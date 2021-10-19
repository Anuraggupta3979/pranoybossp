import React from "react";
import { Grid, Typography } from "@mui/material";
function Heading(props) {
  return (
    <Grid>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {props.title}
      </Typography>
    </Grid>
  );
}

export default Heading;
