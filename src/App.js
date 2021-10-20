import "./App.css";
// import {useState, useEffect} from "react"
import Faqs from "./pages/Faq";
import TermsAndCondition from "./pages/TermsAndCondition";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/admin";
import { Switch, Route } from "react-router-dom";
import categoryList from "./categoryList";
import teamList from "./teamList";

function App() {
  let productList = [];
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
          render={() => <Categories categoryList={categoryList} />}
          exact
        />
        <Route path="/category/:categoryId" component={CategoryPage} exact />
        <Route path="/product/:productId" component={ProductPage} exact />
        <Route path="/admin" component={AdminPage} exact />
      </Switch>
    </div>
  );
}

export default App;
