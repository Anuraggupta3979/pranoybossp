import React from "react";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/home/product/ProductCard";
import CustomButton from "../components/Button";
import Footer from "../components/footer/Footer";
import { getAllProductsByCategory } from "../helper/firestore";
import "../assets/Categories.css";
import HeaderSection from "../sections/HeaderSection";
// import { useMediaQuery } from "react-responsive";

const Categories = ({ categoryList, productList }) => {
  console.log(productList);
  const productDict = getAllProductsByCategory(categoryList, productList);
  console.log(productDict);
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
      </>
    );
  };
  return (
    <div>
      <Navbar />
      <div>
        {productDict.categories.map((category, index) => (
          <>
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              <HeaderSection
                image={category.image}
                title={category.name}
                subtitle={category.description}
              ></HeaderSection>
            </div>

            <ProductCards productList={productDict.productsArray[index]} />
            <div style={{ textAlign: "center" }}>
              <CustomButton title="Learn More" />
            </div>
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
