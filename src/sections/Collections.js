import React, { useState, useEffect } from "react";
import CollectionCard from "../components/CollectionCard";
import { getProductImageUrl } from "../helper/images";
import {addProducts} from "../helper/products"

function FeaturedProducts() {
  const [productData1, setProductData1] = useState({});
  const [productData2, setProductData2] = useState({});

  useEffect(() => {
    getProductImageUrl("handcrafted-bamboo-shelf.png").then((url) => {
      setProductData1({
        image: url,
        category: "Cane-Bamboo-Jute",
        desc: `Metal crafts of India date back to the time of Indus Valley
        Civilization as evident from the discovery of the beautiful
        figurine of the dancing girl- a prehistoric bronze sculpture. And
        till date, the legacy of metal works can be witnessed in the form
        of various metalworking Sculptures.
        Engraving, embossing, and lacquering various metals in the
        form of idols of deities, wall decor, human figurines, and much
        more, this art form has been kept alive by our adept artisans.`,
      });
    });
    getProductImageUrl("petal-flowers-montage-metallic-wall-decor.png").then(
      (url) => {
        setProductData2({
          image: url,
          category: "Metallic Wonders",
          desc: `Made of iron wire, coated with resplendent gold colour, this
        ultimate piece of wall decor is a perfect combo of aestheticism
        and modernism. A piece that soothes your eyes.`,
        });
      }
    );
    addProducts("123")
  }, []);
  const style = {
    cards: {
      display: "flex",
      "flex-flow": "row wrap",
      justifyContent: "space-around",
    },
  };
  return (
    <div>
      <p
        className="text-center mt-5 mb-5"
        style={{ fontSize: "40px", letterSpacing: "9px" }}
      >
        Collections
      </p>
      <div style={style.cards}>
        <CollectionCard
          image={productData1.image}
          category={productData1.category}
        />
        <CollectionCard
          image={productData2.image}
          category={productData2.category}
        />
        <CollectionCard
          image={productData2.image}
          category={productData2.category}
        />
        <CollectionCard
          image={productData2.image}
          category={productData2.category}
        />
      </div>
    </div>
  );
}

export default FeaturedProducts;
