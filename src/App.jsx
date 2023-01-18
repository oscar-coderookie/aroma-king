import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import Template from "./pages/Template/Template";
import Homepage from "./pages/Homepage/Homepage";
import ContactPage from "./pages/ContactPage/ContactPage";
import TpdCatalogue from "./pages/TpdCatalogue/TpdCatalogue";
import BigPuffs from "./pages/BigPuffs/BigPuffs";
import BigPuffDetail from "./pages/BigPuffDetail/BigPuffDetail";
import TpdDetail from "./pages/TpdDetail/TpdDetail";
import AboutUs from "./pages/AboutUs/AboutUs";
import DealersPage from "./pages/DealersPage/DealersPage";
import { CartContextProvider } from "./global/CartContext";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/shop-cart" element={<Template name="Shoopping Cart" />} />
      <Route path="/dealers" element={<DealersPage />} />
      <Route path="/catalogue/big-puffs" element={<BigPuffs />} />
      <Route path="/catalogue/tpd" element={<TpdCatalogue />} />
      <Route path="/catalogue/big-puffs/:id" element={<BigPuffDetail />} />

      <Route path="/catalogue/tpd/:id" element={<TpdDetail />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className="app">
          <Header />
          <Layout />
          <Footer />
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
