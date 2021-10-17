import React from "react";
import ProductCard from "./ProductCard";

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
    <div>
      <p className="text-center mt-5 mb-5" style={{ fontSize: "40px" }}>
        Featured Products
      </p>
      <div style={style.cards}>
        {productList.map((product) => (
          <ProductCard
            image={product.image}
            name={product.name}
            category={product.categoryId}
            desc={product.description}
            key={product.name}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
