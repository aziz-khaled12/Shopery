import { axiosInstance } from "../axiosInstance";

export const fetchProductById = async (productId) => {
  console.log("Fetching product by ID:", productId);
  if (!productId) {
    throw new Error("Product ID is required to fetch product details.");
  }
  try {
    const res = await axiosInstance.get(`/shared/products/${productId}`);
    return res.data.product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const fetchProducts = async (category) => {
  try {
    const url = `/customer/products/${category || ""}`;
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    throw error;
  }
};
