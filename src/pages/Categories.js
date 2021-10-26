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
  const productDict = getAllProductsByCategory(categoryList, productList);
  console.log(productDict);
  // console.log(productList);
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
              categoryId={product.cid}
              description={product.description}
              key={product.cid}
              id={product.id}
              hot={product.hot}
              material={product.material}
              weight={product.weight}
              dimension={product.dimension}
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
