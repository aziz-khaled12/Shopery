import React, { useEffect, useRef } from "react";
import Navbar from "./components/layout/Navbar";
import SignUp from "./components/pages/SignUp";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Test from "./Test";
import ProductPage from "./components/pages/ProductPage";
import Wishlist from "./components/pages/Wishlist";
import ShoppingCart from "./components/pages/ShoppingCart";
import Checkout from "./components/pages/Checkout";
import ProductModal from "./components/modals/ProductModal";
import Category from "./components/pages/Category";
import Blog from "./components/pages/Blogs";
import About from "./components/pages/About";

const App = () => {

  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll if pathname actually changed
    if (prevPathname.current !== pathname) {
      console.log("Navigated to:", pathname);
      window.scrollTo(0, 0);
      prevPathname.current = pathname;
    }
  }, [pathname]);
  
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="account/register" element={<SignUp />}></Route>
        <Route path="account/login" element={<Login />}></Route>
        <Route
          path="categories/vegetables/chinese cabbage"
          element={<ProductPage />}
        ></Route>
        <Route path="test" element={<Test />}></Route>
        <Route path="wishlist" element={<Wishlist />}></Route>
        <Route path="cart" element={<ShoppingCart />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="categories/:category" element={<Category />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <ProductModal />
      <Footer />

    </div>
  );
};

export default App;
