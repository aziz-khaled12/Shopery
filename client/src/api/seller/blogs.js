import { axiosInstance } from "../axiosInstance";

export const uploadBlogImages = async (images) => {
  try {
    const formData = new FormData();
    images.forEach((file) => {
      formData.append("images", file);
    });

    const response = await axiosInstance.post("/seller/blogs/images", formData, {
      headers: { contentType: "multipart/form-data" },
    });

    return response.data.files;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

export const uploadBlogPreviewImage = async (image) => {
    try {
        const formData = new FormData()
        formData.append("image", image)

        const response = await axiosInstance.post("/seller/blogs/preview", formData, {
            headers: { contentType: "multipart/form-data" },
        })

        return response.data.file
    } catch (error) {
        console.error("Upload error:", error);
        throw error;
    }
};

export const createBlog = async (blogData) => {
  console.log("Creating blog with data:", blogData);
  if (!blogData) {
    throw new Error("Blog data is required");
  }
  try {
    const res = await axiosInstance.post("/seller/blogs/save", blogData);
    return res.data.blog;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

export const publishBlog = async (blogId) => {
  try {
    const res = await axiosInstance.put(`/seller/blogs/publish/${blogId}`);
    return res.data.blogs;
  } catch (error) {
    console.error("Error publishing blog:", error);
    throw error;
  }
};
