import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../api/seller/products";

export const useCreateProduct = (product, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => createProduct(product),
    mutationKey: ["products"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    ...options,
  });
};
