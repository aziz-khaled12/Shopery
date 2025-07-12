import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/authStore";

// Custom hook for automatic token validation
export const useTokenValidation = () => {
  const { validateToken, startLogoutTimer, clearLogoutTimer } = useAuthStore();
  
  useEffect(() => {
    // Validate token on mount
    const isValid = validateToken();
    
    if (isValid) {
      startLogoutTimer();
    }
    
    // Cleanup on unmount
    return () => {
      clearLogoutTimer();
    };
  }, [validateToken, startLogoutTimer, clearLogoutTimer]);
};

// Custom hook for handling app focus/blur events
export const useAuthFocusHandler = () => {
  const { refreshAuthState } = useAuthStore();
  
  useEffect(() => {
    const handleFocus = () => {
      // Refresh auth state when app comes back into focus
      refreshAuthState();
    };
    
    const handleVisibilityChange = () => {
      if (!document.hidden) {
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
};

// Custom hook for periodic token validation
export const usePeriodicTokenValidation = (intervalMs = 60000) => {
  const { validateToken } = useAuthStore();
  const intervalRef = useRef(null);
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      validateToken();
    }, intervalMs);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [validateToken, intervalMs]);
};

