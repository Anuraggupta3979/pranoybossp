import React from "react";
import ProductCard from "./ProductCard";
import { Grid, Typography } from "@material-ui/core";
// import { Grid, Typography } from "@material-ui/core";
function FeaturedProducts({ productList }) {
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
        Featured Products
      </Typography>

      <Grid style={style.cards}>
        {productList.map((product) => (
          <ProductCard
            image={product.image}
            name={product.name}
            categoryId={product.categoryId}
            desc={product.description}
            key={product.name}
            id={product.id}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default FeaturedProducts;
