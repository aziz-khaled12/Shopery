import { axiosInstance } from "../axiosInstance";

export const fetchProducts = async (category) => {
  try {
    const url = `/customer/products/${category || ""}`
    const res = await axiosInstance.get(url);
    return res.data.products;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    throw error;
  }
};


