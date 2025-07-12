import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components/layout";
import {
  Home,
  SignUp,
  Login,
  ProductPage,
  Wishlist,
  ShoppingCart,
  Checkout,
  Category,
  Blogs,
  About,
} from "./pages";
import ProductModal from "./components/modals/ProductModal";
import Test from "./Test";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import OrderHistory from "./pages/OrderHistory";
import Settings from "./pages/Settings";
import AddBlog from "./pages/AddBlog";
import AddProduct from "./pages/AddProduct";
import Error from "./pages/Error";
import { useAuthStore } from "./store/authStore";

const App = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  const { accessToken, userId } = useAuthStore();
  console.log("Access Token: ", accessToken);
  console.log("user: ", userId);

  useEffect(() => {
    // Only scroll if pathname actually changed
    if (prevPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account/register" element={<SignUp />} />
        <Route path="account/login" element={<Login />} />
        <Route path="account" element={<Account />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="wishlist" element={<Wishlist withTitle={false} />} />
          <Route path="cart" element={<ShoppingCart withTitle={false} />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route
          path="categories/:category/:productId"
          element={<ProductPage />}
        />
        <Route path="test" element={<Test />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<ShoppingCart withTitle={true} />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="categories/:category" element={<Category />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<AddBlog />} />
        <Route path="product" element={<AddProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ProductModal />
      <Footer />
    </div>
  );
};

export default App;
