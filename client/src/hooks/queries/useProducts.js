import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "../../api/shared/products";

export const useProducts = ({ category, options = {} }) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
    select: (response) => response.products, // Access the products property
    ...options,
  });
};

export const useGetProduct = (productId, options = {}) => {
  console.log("useGetProduct called with productId:", productId);
  return useQuery({
    enabled: !!productId,
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
    ...options,
  });
};
