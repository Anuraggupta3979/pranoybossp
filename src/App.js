import "./App.css";
import Faqs from "./pages/Faq";
import TermsAndCondition from "./pages/TermsAndCondition";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/admin"
import {Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutUs} exact />
          <Route path="/terms" component={TermsAndCondition} exact />
          <Route path="/faq" component={Faqs} exact />
          <Route path="/categories" component={Categories} exact />
          <Route path="/category/:categoryId" component={CategoryPage} exact />
          <Route path="/product/:productId" component={ProductPage} exact />
          <Route path="/admin" component={AdminPage} exact />
        </Switch>
    </div>
  );
}

export default App;
