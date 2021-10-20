import React from "react";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/home/product/ProductCard";
import CustomButton from "../components/Button";
import Footer from "../components/footer/Footer";
import { getAllProductsByCategory } from "../helper/firestore";
import "../assets/Categories.css";
// import { useMediaQuery } from "react-responsive";

const Categories = ({ categoryList, productList }) => {
  const productDict = getAllProductsByCategory(categoryList, productList);

  // let imageHeight = "80vh";
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: "(max-device-width: 768px)",
  // });
  // if (isTabletOrMobileDevice) {
  //   imageHeight = "100vh";
  // }
  const style = {
    imageBanner: {
      width: "98.7vw",
      maxHeight: "80vh",
      objectFit: "cover",
      opacity: "0.75",
      backgroundColor: "black",
    },
  };

  const ProductCards = ({ productList }) => {
    console.log(productList);
    return (
      <>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
          }}
        >
          {productList.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              categoryId={product.categoryId}
              desc={product.description}
              key={product.id}
              id={product.id}
            />
          ))}
        </div>
        <CustomButton title="Learn More" />
      </>
    );
  };
  return (
    <div>
      <Navbar />
      <div style={{ display: "grid", placeItems: "center" }}>
        {productDict.categories.map((category, index) => (
          <>
            <br />
            <br />
            <div className="categories-image-container">
              <img src={category.image} alt="#!" style={style.imageBanner} />
              <div className="categories-page-banner-content">
                <h3 href={`/category/${category.id}`}>{category.name}</h3>
                <br />
                {/* <p>{category.description}</p> */}
              </div>
            </div>
            <br />
            <ProductCards productList={productDict.productsArray[index]} />
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
