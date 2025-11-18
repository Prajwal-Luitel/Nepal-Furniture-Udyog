import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Switch to HashRouter
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products/:title" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNavigation/>
      <Footer />
    </Router>
  );
}

export default App;
