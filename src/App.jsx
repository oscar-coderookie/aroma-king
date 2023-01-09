import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Homepage from "./pages/Homepage/Homepage";

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
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
