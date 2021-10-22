import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "../../../assets/css/Collections.css";

function CollectionCard({ image, name, id }) {
  return (
    <Grid>
      <figure className="categoryCard" style={{ opacity: ".9" }}>
        <Grid>
          <img src={image} alt={name} className="CardImage" />
        </Grid>
        <figcaption>
          <Grid className="collection-card-center">
            <Typography 
              style={{ fontFamily: "'Oswald', sans-serif" , fontSize:"15px", fontWeight:500}}
              className="center-text"
            >
              {name}
            </Typography> 
            <a href={`/category/${id}`} className="collection-card-link">
              Explore
            </a>
          </Grid>
        </figcaption>
      </figure>
    </Grid>
  );
}

export default CollectionCard;
