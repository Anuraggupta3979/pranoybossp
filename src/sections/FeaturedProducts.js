import React from "react";
import ProductCard from "../components/ProductCard";

function FeaturedProducts() {
  const style = {
    main: {
    //   display: "grid",
    //   placeItems: "center",
    },
    cards: {
      display: "flex",
      "flex-flow": "row wrap",
      justifyContent: "space-around",
    },
  };
  return (
    <div>
      <h1>Featured Products</h1>
      <div style={style.cards}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default FeaturedProducts;
