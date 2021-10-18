import React from "react";
import CollectionCard from "./CollectionCard";
import { Grid, Typography } from "@material-ui/core";
function FeaturedProducts({ categoryList }) {
  const style = {
    cards: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
    },
  };
  return (
    <Grid>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "100px",
          marginBottom: "50px",
        }}
      >
        Categories
      </Typography>
      <Grid style={style.cards}>
        {categoryList.map((category) => (
          <CollectionCard
            image={category.image}
            name={category.name}
            key={category.name}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default FeaturedProducts;
