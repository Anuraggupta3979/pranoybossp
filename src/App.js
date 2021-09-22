import "./App.css";
import FrontCarousel from "./sections/FrontCarousel";
import FeaturedProducts from "./sections/FeaturedProducts";
import NavbarH from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavbarH></NavbarH>
      <FrontCarousel></FrontCarousel>
      <FeaturedProducts></FeaturedProducts>
      <Footer></Footer>
    </div>
  );
}

export default App;
