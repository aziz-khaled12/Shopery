import { useQuery } from "@tanstack/react-query";
import {
  fetchCategoryProducts,
  fetchProductById,
  fetchProducts,
  fetchProductsWithIds,
} from "../../api/shared/products";

export const useProducts = ({ section, options = {} }) => {
  return useQuery({
    queryKey: ["products", section],
    queryFn: () => fetchProducts(section),
    select: (response) => response.products,
    ...options,
  });
};

export const useGetProductsWithIds = ({ ids, options = {} }) => {
  return useQuery({
    queryKey: ["products", "wishlist"],
    queryFn: () => fetchProductsWithIds(ids),
    select: (response) => response.products,
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

export const useFetchCategoryProducts = (category, options = {}) => {
  return useQuery({
    enabled: !!category,
    queryKey: ["products", category, options.page, options.limit],
    queryFn: () => fetchCategoryProducts(category, options.page, options.limit),
    ...options,
  });
};
