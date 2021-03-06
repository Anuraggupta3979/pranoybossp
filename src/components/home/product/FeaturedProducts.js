import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";
// import { Grid, Typography } from "@material-ui/core";
import Heading from "../../Heading";
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
      <Heading title="Featured Products" />

      <Grid style={style.cards}>
        {productList.map((product) => (
          <ProductCard
            image={product.image}
            name={product.name}
            categoryId={product.cid}
            category={product.category}
            description={product.description}
            key={product.cid}
            id={product.id}
            hot={product.hot}
            material={product.material}
            weight={product.weight}
            dimension={product.dimension}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default FeaturedProducts;
