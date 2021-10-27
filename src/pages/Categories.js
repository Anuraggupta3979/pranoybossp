import React from "react";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/home/product/ProductCard";
import CustomButton from "../components/Button";
import Footer from "../components/footer/Footer";
import { getAllProductsByCategory } from "../helper/firestore";
import "../assets/Categories.css";
import HeaderSection from "../sections/HeaderSection";
// import { useMediaQuery } from "react-responsive";
// import { Link } from "react-router-dom";
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
          {productList.slice(0, 4).map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              categoryId={product.cid}
              category={product.category}
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
              <a href={`/category/${category.categoryId}`}>
                <CustomButton title="Learn More" />
              </a>
              {/* <Link to={`/category/${category.categoryId}`}>
                <CustomButton title="Learn More" />
              </Link> */}
            </div>
          </>
        ))}
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Categories;
