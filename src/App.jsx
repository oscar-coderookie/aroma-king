import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import Template from "./pages/Template/Template";
import Homepage from "./pages/Homepage/Homepage";
import ContactPage from "./pages/ContactPage/ContactPage";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/contact" element={<ContactPage/>} />
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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
