import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getProductsByCategory, getDocById } from "../helper/firestore";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/home/product/ProductCard";
import Footer from "../components/footer/Footer";

const style = {
  height: "60%",
  width: "98.7vw",
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const history = useHistory();
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    getProductsByCategory(categoryId)
      .then((lst) => {
        setProductList(lst);
      })
      .catch((err) => {
        console.log("error", err);
        history.push(`/`);
      });
    getDocById("categories", categoryId)
      .then((categoryDoc) => {
        setCategory(categoryDoc);
      })
      .catch((err) => {
        console.log("error", err);
        history.push(`/`);
      });
  }, [categoryId, history]);

  return (
    <div>
      <Navbar />

      <div style={{ display: "grid", justifyContent: "center" }}>
        <img src={category.image} alt={category.name} style={style} />
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
