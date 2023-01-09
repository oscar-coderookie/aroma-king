import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Template from "./pages/Template/Template";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Template name="Home" />} />
      <Route path="/contact" element={<Template name="Contact" />} />
      <Route path="/about" element={<Template name="About Us" />} />
      
      <Route path="/shop-cart" element={<Template name="Shoopping Cart" />} />
      <Route
        path="/catalogue/big-puffs"
        element={<Template name="Big Puffs Catalogue" />}
      />
      <Route path="/catalogue/tpd" element={<Template name="TPD Catalogue" />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Layout />
      </div>
    </Router>
  );
}

export default App;
