import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { getCategoryById, getProductsByCategoryId } from "../helper/firestore";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/home/product/ProductCard";
import Footer from "../components/footer/Footer";
import Heading from "../components/Heading";
import HeaderSection from "../sections/HeaderSection";


const CategoryPage = ({ categoryList, productList }) => {
    const { categoryId } = useParams();
    let category = {
        id: "",
        name: "",
        image: "",
        description: "",
    };
    const [productListUpdated, setProductListUpdated] = useState([]);

    useEffect(() => {

      category = getCategoryById(categoryList, categoryId);
      setProductListUpdated(getProductsByCategoryId(categoryId, productList));
      console.log(category,productListUpdated, '##');

    },[categoryId, productList]);

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
          {productListUpdated.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              category={product.categoryId}
              desc={product.description}
              key={product.name}
              id={product.id}
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
