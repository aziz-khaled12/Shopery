// AuthProvider.js - Enhanced with user data management in auth store
import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useFetchUser } from "./queries/useUser";
import { useEventListeners } from "./auth/useEventListner";

const initializeAuth = () => {
  const authStore = useAuthStore.getState();
  const isValid = authStore.validateToken();

  console.log("isValid: ", isValid);

  if (isValid) {
    authStore.startLogoutTimer();
    console.log("✅ Auth initialized: Token valid, logout timer started");
  } else {
    console.log("❌ Auth initialized: No valid token found");
    authStore.clearUser();
  }

  return isValid;
};

// Handle focus/visibility events directly in event handlers
const handleAppFocus = () => {
  console.log("👀 App focused: Checking auth state...");
  useAuthStore.getState().refreshAuthState();
};

const handleVisibilityChange = () => {
  if (!document.hidden) {
    console.log("👀 App visible: Checking auth state...");
    useAuthStore.getState().refreshAuthState();
  }
};

export const AuthProvider = ({ children }) => {
  // Use your existing useUser hook to handle user data fetching
  const { setUser } = useAuthStore.getState();

  const userQuery = useFetchUser();
  const userData = !userQuery.isLoading && userQuery.data;

  useEffect(() => {
    if (userData) {
      setUser(userData);
      console.log("✅ AuthProvider: User data set");
    }
  }, [userData, setUser]);

  // Initialize auth state immediately when component mounts
  React.useMemo(() => {
    return initializeAuth();
  }, []);

  // Set up event listeners (minimal useEffect usage)
  useEventListeners({
    handleAppFocus,
    handleVisibilityChange,
  });

  // Setup cleanup on unmount
  React.useLayoutEffect(() => {
    return () => {
      useAuthStore.getState().clearLogoutTimer();
      console.log("🧹 AuthProvider: Cleaned up logout timer");
    };
  }, []);

  return children;
};
