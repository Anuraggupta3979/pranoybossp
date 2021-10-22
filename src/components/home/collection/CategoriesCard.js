import React from "react";
import "../../../assets/css/Categories.css";
import { Grid, Typography } from "@material-ui/core";
function CategoriesCard({ image, name, id }) {
  return (
    <>
      <Grid item xl={4} lg={4} sm={6} xs={12} className="categoriesCard">
        <img src={image} />
        <Grid class="centered">
          <p
            style={{ fontFamily: "'Oswald', sans-serif" , color:"white" , fontSize:"20px" , fontWeight:1200}}
            className="lead mb-0"
          >
           {name}
          </p>
          <a href={`/category/${id}`} className="collection-card-link">
            Explore
          </a>
        </Grid>
      </Grid>
    </>
  );
}

export default CategoriesCard;
