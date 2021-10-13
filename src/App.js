import "./App.css";
import Faqs from "./pages/Faq";
import TermsAndCondition from "./pages/TermsAndCondition";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
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
          <Route path="/admin" component={AdminPage} exact />
        </Switch>
    </div>
  );
}

export default App;
