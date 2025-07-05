import { axiosInstance } from "../utils/axiosInstance";

export const uploadProductImages = async (images) => {
  try {
    const formData = new FormData();
    images.forEach((file) => {
      formData.append("images", file);
    });

    const response = await axiosInstance.post("/seller/products/images", formData, {
      headers: { contentType: "multipart/form-data" },
    });

    const filesUrls = response.data.files.map((file) => {
      return file.url
    })

    return filesUrls;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

export const uploadProductPreviewImage = async (image) => {
    try {
        const formData = new FormData()
        formData.append("image", image)

        const response = await axiosInstance.post("/seller/products/preview", formData, {
            headers: { contentType: "multipart/form-data" },
        })

        return response.data.file.url
    } catch (error) {
        console.error("Upload error:", error);
        throw error;
    }
};