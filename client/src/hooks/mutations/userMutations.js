import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBillingInfo, updateUser } from "../../api/shared/user";
import { useAuthStore } from "../../store/authStore";

export const useUpdateUser = (options = {}) => {
  const queryClient = useQueryClient();
  const { userId } = useAuthStore();

  return useMutation({
    mutationKey: ["user", userId],
    mutationFn: (userData) => updateUser(userId, userData),
    onSuccess: (updatedUser) => {
      // Update React Query cache directly
      queryClient.setQueryData(["user", userId], updatedUser);
    },
    ...options,
  });
};

export const useUpdateUserBillingInfo = (options = {}) => {
  const queryClient = useQueryClient();
  const { userId } = useAuthStore();

  return useMutation({
    mutationKey: ["user", userId],
    mutationFn: (billingInfo) => updateBillingInfo(userId, billingInfo),
    onSuccess: (user) => {
      // Update React Query cache directly
      queryClient.setQueryData(["user", userId], user);
    },
    ...options,
  });
};

