import React from "react";
// import aabc from "../../assets/aaa.jpg";
import "../../assets/css/abc.css";
import { Grid, Typography } from "@mui/material";
import Button from "../Button";
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
                textOverflow: "ellipsis",
                // height: "500px",
              }}
            >
              <Grid
                className="col-xl-6 col-12 col-md-6   "
                style={{
                  justifyContent: "center",
                  order: textorder,
                  alignItems: "center",
                  // height: "100px",
                  textOverflow: "ellipsis",
                  height: "350px",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    fontSize: "1.825rem",
                    fontWeight: 500,
                    marginBottom: "15px",
                    fontFamily: "맑은 고딕",
                  }}
                >
                  {props.title}
                </Typography>
                <Grid
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "180px",
                  }}
                >
                  <Typography
                    className="mt-1  text-justify"
                    style={{
                      fontFamily: "맑은 고딕 ",

                      textAlign: "justify",
                    }}
                  >
                    {props.description}
                  </Typography>
                </Grid>
                <a href={`/category/${props.id}`}>
                  <Button title="Explore"></Button>
                </a>
              </Grid>
              <Grid className="col-lg-1 col-md-1 order-2"></Grid>
              <Grid
                className="col-lg-5 col-12 col-md-5 p-2 "
                style={{ order: imageorder }}
              >
                <img
                  src={props.image}
                  alt="category"
                  className="mx-1 img card-img-top "
                  style={{ height: "332px" }}
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
