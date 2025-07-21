import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUser } from "../../api/shared/user";
import { useAuthStore } from "../../store/authStore";
import { useEffect } from "react";

export const useFetchUser = (options = {}) => {
  const { userId, isAuthenticated, user } = useAuthStore();
  
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    enabled: isAuthenticated && userId && !user || false, 
    staleTime: 5 * 60 * 1000, // 5 minutes
    
    
    retry: (failureCount, error) => {
      // Don't retry on 401/403 errors
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return false;
      }
      return failureCount < 3;
    },
    ...options,
  });
};



// Hook that automatically fetches user data when authenticated
export const useAutoFetchUser = () => {
  const { userId, isAuthenticated } = useAuthStore();
  const queryClient = useQueryClient();
  
  const userQuery = useFetchUser({
    // Keep data fresh
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  console.log("user: ", userQuery)
  
  // Prefetch user data when userId changes (login/token refresh)
  useEffect(() => {
    if (isAuthenticated && userId) {
      queryClient.prefetchQuery({
        queryKey: ["user", userId],
        queryFn: () => fetchUser(userId),
        staleTime: 5 * 60 * 1000,
      });
    }
  }, [userId, isAuthenticated, queryClient]);
  
  return userQuery;
};

// Hook to invalidate user data (useful for logout)
export const useInvalidateUser = () => {
  const queryClient = useQueryClient();
  
  return () => {
    queryClient.invalidateQueries({ queryKey: ["user"] });
    queryClient.removeQueries({ queryKey: ["user"] });
  };
};