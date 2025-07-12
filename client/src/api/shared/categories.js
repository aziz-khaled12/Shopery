import { axiosInstance } from "../axiosInstance";

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/shared/category/All");
    console.log("Fetched categories:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const insertCategories = async (categories) => {
  try {
    const response = await axiosInstance.post("/shared/category", {
      names: categories,
    });
    return response.data;
  } catch (error) {
    console.error("Error inserting categories:", error);
    throw error;
  }
};
