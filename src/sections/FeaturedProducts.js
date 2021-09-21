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
      <p className="text-center mt-5 mb-5" style={{fontSize:"25px"}}>Featured Products</p>
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
