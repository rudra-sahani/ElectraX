import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import CursorGlow from "./components/CursorGlow";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import MyListings from "./pages/MyListings";

function App() {

  const [loading, setLoading] = useState(true);
  const location = useLocation();

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);


if (loading) {
  return <Loader />;
}

  return (
    <>
    <CursorGlow />
     {/* <ScrollToTop /> */}
      <Navbar />
<ScrollToTop />
   <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        

       <Route
  path="/product/:slug"
  element={<ProductDetails />}
/>

<Route
  path="/cart"
  element={<Cart />}
/>

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/add-product"
  element={<AddProduct />}
/>
<Route
  path="/my-listings"
  element={<MyListings />}
/>
      </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;