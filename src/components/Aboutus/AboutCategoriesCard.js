import React from "react";
// import aabc from "../../assets/aaa.jpg";
import "../../assets/css/abc.css";
import { Grid, Typography } from "@mui/material";
function AboutCategoriesCard(props) {
  const imageorder = props.imageorder;
  const textorder = props.textorder;

  return (
    <Grid className="mt-5">
      <Grid className="container-fluid mt-lg-2 mt-md-2 mt-2">
        <Grid className="row">
          <Grid className="col-sm-11 col-12 mx-auto px-lg-0 px-md-4 px-5">
            <Grid
              className="row"
              style={{
                overflow: "hidden",
                boxShadow: "2px 2px 2px 2px #dcdde1",
                borderRadius: "10px",
              }}
            >
              <Grid
                className="col-xl-5 col-12 col-md-5   "
                style={{
                  justifyContent: "center",
                  order: textorder,
                  alignItems: "center",
                  height: "100px",
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
                  {props.title}
                </Typography>
                <Typography
                  className="mt-2 py-2 text-justify"
                  style={{ fontFamily: "맑은 고딕 " }}
                >
                  {props.description}
                </Typography>
              </Grid>
              <Grid className="col-lg-1 col-md-1 order-2"></Grid>
              <Grid
                className="col-lg-6 col-12 col-md-6 p-2 "
                style={{ order: imageorder }}
              >
                <img
                  src={props.image}
                  alt="category"
                  className="mx-1 img card-img-top "
                  style={{ height: "300px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutCategoriesCard;
