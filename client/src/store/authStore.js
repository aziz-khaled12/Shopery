// authStore.js - Updated to work with React Query
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

// Utility functions
const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
};

const getTokenFromStorage = () => {
  try {
    return localStorage.getItem("token");
  } catch (error) {
    console.error("Failed to get token from storage:", error);
    return null;
  }
};

const setTokenInStorage = (token) => {
  try {
    localStorage.setItem("token", token);
  } catch (error) {
    console.error("Failed to set token in storage:", error);
  }
};

const removeTokenFromStorage = () => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Failed to remove token from storage:", error);
  }
};

// Get user ID from token
const getUserIdFromToken = (token) => {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.userId; 
  } catch (error) {
    console.error("Failed to get user ID from token:", error);
    return null;
  }
};

// Initialize store with token validation
const initializeAuth = () => {
  const token = getTokenFromStorage();
  const isValid = token && !isTokenExpired(token);
  
  if (!isValid && token) {
    removeTokenFromStorage();
  }
  
  return {
    accessToken: isValid ? token : null,
    userId: isValid ? getUserIdFromToken(token) : null,
    isAuthenticated: isValid,
  };
};

export const useAuthStore = create((set, get) => ({
  // Initialize state
  ...initializeAuth(),
  user: null, // User data will be stored here
  error: null,
  logoutTimer: null,

  // Actions
  loginSuccess: (token) => {
    if (!token || isTokenExpired(token)) {
      set({ error: "Invalid or expired token" });
      return;
    }

    try {
      const userId = getUserIdFromToken(token);
      setTokenInStorage(token);
      
      set({
        accessToken: token,
        userId,
        isAuthenticated: true,
        error: null,
      });

      // Start token expiration timer
      get().startLogoutTimer();
    } catch (error) {
      console.error("Login failed:", error);
      set({ error: "Failed to process login token" });
    }
  },

  logout: (options = {}) => {
    const { error = null, skipStorage = false } = options;
    
    // Clear logout timer
    get().clearLogoutTimer();
    
    // Clear storage unless explicitly skipped
    if (!skipStorage) {
      removeTokenFromStorage();
    }
    
    set({
      accessToken: null,
      userId: null,
      user: null, // Clear user data
      isAuthenticated: false,
      error,
    });
  },

  // Token validation and timer management
  validateToken: () => {
    const { accessToken } = get();
    
    if (!accessToken) {
      get().logout({ error: "No access token found" });
      return false;
    }

    if (isTokenExpired(accessToken)) {
      get().logout({ error: "Session expired, please log in again" });
      return false;
    }

    return true;
  },

  startLogoutTimer: () => {
    const { accessToken, clearLogoutTimer } = get();
    
    if (!accessToken || isTokenExpired(accessToken)) {
      return;
    }

    try {
      const decoded = jwtDecode(accessToken);
      const expiresIn = decoded.exp * 1000 - Date.now();
      
      clearLogoutTimer();
      
      const timerId = setTimeout(() => {
        get().logout({ error: "Session expired, please log in again" });
      }, expiresIn);
      
      set({ logoutTimer: timerId });
    } catch (error) {
      console.error("Failed to start logout timer:", error);
    }
  },

  clearLogoutTimer: () => {
    const { logoutTimer } = get();
    if (logoutTimer) {
      clearTimeout(logoutTimer);
      set({ logoutTimer: null });
    }
  },

  // Utility methods
  getTokenExpirationTime: () => {
    const { accessToken } = get();
    if (!accessToken) return null;
    
    try {
      const decoded = jwtDecode(accessToken);
      return new Date(decoded.exp * 1000);
    } catch (error) {
      console.error("Failed to get token expiration:", error);
      return null;
    }
  },

  getTimeUntilExpiration: () => {
    const { accessToken } = get();
    if (!accessToken) return 0;
    
    try {
      const decoded = jwtDecode(accessToken);
      return Math.max(0, decoded.exp * 1000 - Date.now());
    } catch (error) {
      console.error("Failed to calculate time until expiration:", error);
      return 0;
    }
  },

  refreshAuthState: () => {
    const token = getTokenFromStorage();
    const { accessToken } = get();
    
    if (token !== accessToken) {
      if (token && !isTokenExpired(token)) {
        try {
          const userId = getUserIdFromToken(token);
          set({
            accessToken: token,
            userId,
            user: null, // Reset user data, will be fetched by AuthProvider
            isAuthenticated: true,
            error: null,
          });
          get().startLogoutTimer();
        } catch (error) {
          console.error("Failed to refresh auth state:", error);
          get().logout({ error: "Invalid session data" });
        }
      } else {
        get().logout({ skipStorage: true });
      }
    } else {
      get().validateToken();
    }
  },

  // Method to set user data
  setUser: (userData) => set({ user: userData }),

  // Method to clear user data
  clearUser: () => set({ user: null }),

  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));