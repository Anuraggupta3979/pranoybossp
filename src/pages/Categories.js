import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getImageUrl, getProductImageUrl } from "../helper/images";
import ProductCard from "../components/ProductCard";

const style = {
  aspectRatio: "default",
  width: "98.7vw",
};

const Categories = () => {
  const [bannerUrl1, setBannerUrl1] = useState("");
  const [bannerUrl2, setBannerUrl2] = useState("");
  const [bannerUrl3, setBannerUrl3] = useState("");
  const [bannerUrl4, setBannerUrl4] = useState("");
  const [bannerUrl5, setBannerUrl5] = useState("");
  const [productData1, setProductData1] = useState({});
  const [productData2, setProductData2] = useState({});

  useEffect(() => {
    getImageUrl("cane-bamboo.jpg").then((url) => {
      setBannerUrl1(url);
    });
    getImageUrl("home utilities n decor.jpg").then((url) => {
      setBannerUrl2(url);
    });
    getImageUrl("metallic marvels1.jpg").then((url) => {
      setBannerUrl3(url);
    });
    getImageUrl("teracotta.jpg").then((url) => {
      setBannerUrl4(url);
    });
    getImageUrl("Wooden crafts.jpg").then((url) => {
      setBannerUrl5(url);
    });
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
  const Cards = () => (
    <div
      style={{
        display: "flex",
        "flex-flow": "row wrap",
        justifyContent: "space-around",
      }}
    >
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
  );
  return (
    <div>
      <Navbar />
      <img src={bannerUrl1} alt="#!" style={style} />
      <br />
      <Cards />
      <br />
      <img src={bannerUrl2} alt="#!" style={style} />
      <br />
      <Cards />
      <br />
      <img src={bannerUrl3} alt="#!" style={style} />
      <br />
      <Cards />
      <br />
      <img src={bannerUrl4} alt="#!" style={style} />
      <br />
      <Cards />
      <br />
      <img src={bannerUrl5} alt="#!" style={style} />
      <br />
      <Cards />
      <br />
    </div>
  );
};

export default Categories;
