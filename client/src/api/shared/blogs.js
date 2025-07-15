import { axiosInstance } from "../axiosInstance";

export const fetchBlogs = async () => {
  try {
    const res = await axiosInstance.get("/shared/blogs/All");
    return res.data.blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const fetchBlogById = async (blogId) => {
  try {
    const res = await axiosInstance.get(`/shared/blogs/${blogId}`);
    return res.data.blog;
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    throw error;
  }
};

export const fetchPublishedBlogs = async () => {
  try {
    const res = await axiosInstance.get("/shared/blogs/published");
    return res.data.blogs;
  } catch (error) {
    console.error("Error fetching published blogs:", error);
    throw error;
  }
};
