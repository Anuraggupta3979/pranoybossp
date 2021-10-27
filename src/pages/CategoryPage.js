import React from "react";
import { useParams } from "react-router";
import { getCategoryById, getProductsByCategoryId } from "../helper/firestore";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/home/product/ProductCard";
import Footer from "../components/footer/Footer";
import Heading from "../components/Heading";
import HeaderSection from "../sections/HeaderSection";

const CategoryPage = ({ categoryList, productList }) => {
  const { categoryId } = useParams();
  console.log(categoryId);
  let category = {
    id: "",
    name: "",
    image: "",
    description: "",
  };
  category = getCategoryById(categoryList, categoryId);
  productList = getProductsByCategoryId(categoryId, productList);
  console.log(productList);
  return (
    <div>
      <Navbar />
      <HeaderSection
        image={category.image}
        title={category.name}
        subtitle={category.description}
      ></HeaderSection>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <Heading title={category.name} />
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
              description={product.description}
              material={product.material}
              weight={product.weight}
              dimension={product.dimension}
              hot={product.hot}
              category={product.category}
              key={product.id}
              id={product.id}
            />
          ))}
        </div>
        <br />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
