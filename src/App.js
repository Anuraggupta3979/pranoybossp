// import { useState, useEffect } from "react";
import Faqs from "./pages/Faq";
import TermsAndCondition from "./pages/TermsAndCondition";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
// import AdminPage from "./pages/admin";
import { Switch, Route } from "react-router-dom";
import categoryList from "./categoryList";
import teamList from "./teamList";
import productList1 from "./productList";
// import { getAllDocs } from "./helper/firestore";
import "./App.css";

function App() {
  // const [productList, setProductList] = useState([]);
  const productList = productList1.map((product) => {
    const id = product.name.toLowerCase().split(" ").join("-");
    const categoryId = product.category.toLowerCase().split(" ").join("-");
    return { id: id, categoryId: categoryId, ...product };
  });
  console.log(productList[0]);
  // console.log(productList[1])
  // useEffect(() => {
  //   getAllDocs("products")
  //     .then((data) => {
  //       setProductList(data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
  const handleClick = () => {
    window.open("https://wa.me/919414131148");
  };

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          render={() => (
            <Home
              teamList={teamList}
              categoryList={categoryList}
              productList={productList}
            />
          )}
          exact
        />
        <Route
          path="/about"
          render={() => (
            <AboutUs categoryList={categoryList} teamList={teamList} />
          )}
          exact
        />
        <Route path="/terms" component={TermsAndCondition} exact />
        <Route path="/faq" component={Faqs} exact />
        <Route
          path="/categories"
          render={() => (
            <Categories categoryList={categoryList} productList={productList} />
          )}
          exact
        />
        <Route
          path="/category/:categoryId"
          render={() => (
            <CategoryPage
              categoryList={categoryList}
              productList={productList}
            />
          )}
          exact
        />
        <Route
          path="/product/:productId"
          render={() => (
            <ProductPage
              productList={productList}
              // teamList={teamList}
              // categoryList={categoryList}
            />
          )}
          exact
        />
        {/* <Route path="/admin" component={AdminPage} exact /> */}
      </Switch>
      <p
        onClick={handleClick}
        className="whatsapp_float"
        // target="_blank"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </p>
    </div>
  );
}

export default App;
