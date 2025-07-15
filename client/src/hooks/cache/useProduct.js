import { useQueryClient } from "@tanstack/react-query";


export const useProductFromCache = (productId) => {
  const queryClient = useQueryClient();
  const allProducts = queryClient.getQueryData(["products"]);
  console.log("allProducts: ", allProducts);
  return allProducts?.find((p) => p.id === productId);
};
