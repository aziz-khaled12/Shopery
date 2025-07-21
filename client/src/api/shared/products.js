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

export const fetchProducts = async (section) => {
  try {
    const url = `/customer/products/${section || ""}`;
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    throw error;
  }
};

export const fetchCategoryProducts = async (category, page, limit) => {
    try {
    const url = `/shared/products/category/${category}?page=${page}&limit=${limit}`;
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    throw error;
  }
}