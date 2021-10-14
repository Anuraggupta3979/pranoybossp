import React from "react";
import CollectionCard from "./CollectionCard";

function FeaturedProducts({ categoriesList }) {
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
        Collections
      </p>
      <div style={style.cards}>
        {categoriesList.map((category) => (
          <CollectionCard
            image={category.image}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
