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

export const createBlog = async (blogData) => {};

export const modifyBlog = async (blogData) => {};
