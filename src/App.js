import "./App.css";

import FrontCarousel from "./sections/FrontCarousel";
import FeaturedProducts from "./sections/FeaturedProducts";
import CollectionCard from "./sections/Collections";
import NavbarH from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarH></NavbarH>
      <FrontCarousel></FrontCarousel>
      <FeaturedProducts></FeaturedProducts>
      <CollectionCard></CollectionCard>
    </div>
  );
}

export default App;
