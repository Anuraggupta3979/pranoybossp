import React from 'react'
import CollectionCard from "../components/CollectionCard";

function Collections() {
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
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
          </div>
        </div>
      );
}

export default Collections
