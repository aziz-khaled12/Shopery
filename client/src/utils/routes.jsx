import { Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { fetchUser } from "../api/shared/user";

const { isAuthenticated, userId } = useAuthStore.getState();

const userData = userId && await fetchUser(userId)
const userRole = userData?.role.name


export const PublicRoute = ({ children }) => {
  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

export const PrivateRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/account/login" replace />;
};

export const SellerRoute = ({ children }) => {
  if (!isAuthenticated) return <Navigate to="/account/login" replace />;
  if (userRole !== "seller") return <Navigate to="/" replace />;

  return children;
};
