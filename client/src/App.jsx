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
import AddCategoryForm from "./pages/AddCategoryForm";
import { PrivateRoute, PublicRoute, SellerRoute } from "./utils/routes";

const App = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

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
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route
          path="account/register"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="account/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="wishlist" element={<Wishlist withTitle={false} />} />
          <Route path="cart" element={<ShoppingCart withTitle={false} />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="blogs"
            element={
              <SellerRoute>
                <AddBlog />
              </SellerRoute>
            }
          />
          <Route
            path="products"
            element={
              <SellerRoute>
                <AddProduct />
              </SellerRoute>
            }
          />
        </Route>

        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        {/* Seller Routes */}
        <Route
          path="blog"
          element={
            <SellerRoute>
              <AddBlog />
            </SellerRoute>
          }
        />
        <Route
          path="product"
          element={
            <SellerRoute>
              <AddProduct />
            </SellerRoute>
          }
        />
        <Route
          path="cat"
          element={
            <SellerRoute>
              <AddCategoryForm />
            </SellerRoute>
          }
        />

        {/* Public Product Routes */}
        <Route
          path="categories/:category/:productId"
          element={<ProductPage />}
        />
        <Route path="categories/:category" element={<Category />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<ShoppingCart withTitle={true} />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="test" element={<Test />} />

        {/* Fallback */}
        <Route path="*" element={<Error />} />
      </Routes>
      <ProductModal />
      <Footer />
    </div>
  );
};

export default App;
