// AuthProvider.js - Enhanced with user data management in auth store
import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useUser } from "./queries/useUser";


// Enhanced AuthProvider that manages both auth state and user data
export const AuthProvider = ({ children }) => {
  const { 
    validateToken, 
    startLogoutTimer, 
    clearLogoutTimer, 
    refreshAuthState,
    isAuthenticated,
    userId,
    user,
    setUser,
    clearUser,
    accessToken,
    logout 
  } = useAuthStore();
  
  // Use React Query to fetch user data
  const userQuery = useUser({
    enabled: (isAuthenticated && !!userId && !user) || false, // Only fetch if authenticated and userId exists
    onSuccess: (userData) => {
      console.log("✅ AuthProvider: User data fetched, storing in auth store");
      setUser(userData);
    },
    onError: (error) => {
      console.error("❌ AuthProvider: Failed to fetch user data:", error);
      // If user fetch fails with auth error, logout
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        logout({ error: "Session expired, please log in again" });
      }
    },
    retry: (failureCount, error) => {
      // Don't retry on auth errors
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return false;
      }
      return failureCount < 2;
    }
  });
  
  // Initialize auth on app start
  useEffect(() => {
    console.log("🔐 AuthProvider: Initializing authentication...");
    
    const isValid = validateToken();
    
    if (isValid) {
      startLogoutTimer();
      console.log("✅ AuthProvider: Token is valid, logout timer started");
    } else {
      console.log("❌ AuthProvider: No valid token found");
      clearUser();
    }
    
    return () => {
      clearLogoutTimer();
      console.log("🧹 AuthProvider: Cleaned up logout timer");
    };
  }, [validateToken, startLogoutTimer, clearLogoutTimer, clearUser]);
  
  // Handle focus/visibility changes
  useEffect(() => {
    const handleFocus = () => {
      console.log("👀 AuthProvider: User returned to app, checking auth state...");
      refreshAuthState();
    };
    
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log("👀 AuthProvider: App became visible, checking auth state...");
        refreshAuthState();
      }
    };
    
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [refreshAuthState]);
  
  // Clear user data when logging out
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("🧹 AuthProvider: User logged out, clearing user data...");
      clearUser();
    }
  }, [isAuthenticated, clearUser]);
  
  // Refetch user data when userId changes (login/token refresh) and no user data exists
  useEffect(() => {
    if (isAuthenticated && userId && !user) {
      console.log("🔄 AuthProvider: User ID available but no user data, triggering fetch...");
      userQuery.refetch();
    }
  }, [isAuthenticated, userId, user, userQuery, accessToken]);
  
  return children;
};

// Simplified usage - just use the auth store directly
export const useAuth = () => {
  return useAuthStore();
};