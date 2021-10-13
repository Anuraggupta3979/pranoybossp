import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProductImageUrl } from "../../../helper/images";

function FeaturedProducts() {
  const [productData1, setProductData1] = useState({});
  const [productData2, setProductData2] = useState({});

  useEffect(() => {
    getProductImageUrl("handcrafted-bamboo-shelf.png").then((url) => {
      setProductData1({
        image: url,
        name: "Handcrafted Bamboo shelf",
        category: "Cane-Bamboo-Jute",
        desc: `The bamboo chair is handcrafted with extreme care and
        diligence. This comfortable chair can be used to beautify any
        space with grace, be it your garden/exteriors or the interiors.`,
      });
    });
    getProductImageUrl("petal-flowers-montage-metallic-wall-decor.png").then(
      (url) => {
        setProductData2({
          image: url,
          name: "Petal flowers Montage Metallic Wall Decor",
          category: "Metallic Wonders",
          desc: `Made of iron wire, coated with resplendent gold colour, this
        ultimate piece of wall decor is a perfect combo of aestheticism
        and modernism. A piece that soothes your eyes.`,
        });
      }
    );
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
      <p className="text-center mt-5 mb-5" style={{ fontSize: "40px" }}>
        Featured Products
      </p>
      <div style={style.cards}>
        <ProductCard
          image={productData1.image}
          name={productData1.name}
          category={productData1.category}
        />
        <ProductCard
          image={productData2.image}
          name={productData2.name}
          category={productData2.category}
        />
        <ProductCard
          image={productData1.image}
          name={productData1.name}
          category={productData1.category}
        />
        <ProductCard
          image={productData2.image}
          name={productData2.name}
          category={productData2.category}
        />
      </div>
    </div>
  );
}

export default FeaturedProducts;
