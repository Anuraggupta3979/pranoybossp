import * as React from "react";

// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
export default function AboutCategoriesCard(props) {

  return (
    <Card sx={{ display: "flex", marginTop: "50px", marginBottom: "50px" }}>
      <Grid container item style={{ display: "flex" }}>
        <Grid item xl={6} lg={6} sm={6}>
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={props.image}
            alt="Live from space album cover"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item sm={1}></Grid>
        <Grid item xl={5} lg={5} sm={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {props.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {props.description}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
