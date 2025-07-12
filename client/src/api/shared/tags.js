import { axiosInstance } from "../axiosInstance";

export const fetchTags = async () => {
  try {
    const response = await axiosInstance.get("/shared/tag/All");
    return response.data;
  } catch (error) {
    console.error("Error inserting tags:", error);
    throw error;
  }
};

export const insertTags = async (tags) => {
  try {
    const response = await axiosInstance.post("/shared/tags", { names: tags });
    return response.data;
  } catch (error) {
    console.error("Error inserting tags:", error);
    throw error;
  }
};
