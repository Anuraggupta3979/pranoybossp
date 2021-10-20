import React from "react";
import { useParams } from "react-router";
import { getCategoryById, getProductsByCategoryId } from "../helper/firestore";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/home/product/ProductCard";
import Footer from "../components/footer/Footer";

const style = {
  height: "60%",
  width: "98.7vw",
};

const CategoryPage = ({ categoryList, productList }) => {
  const { categoryId } = useParams();
  let category = {
    id: "",
    name: "",
    image: "",
    description: "",
  };
  category = getCategoryById(categoryList, categoryId);
  productList = getProductsByCategoryId(categoryId, productList);
  return (
    <div>
      <Navbar />

      <div style={{ display: "grid", justifyContent: "center" }}>
        <img src={category.image} alt={category.title} style={style} />
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
              category={product.categoryId}
              desc={product.description}
              key={product.name}
            />
          ))}
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
