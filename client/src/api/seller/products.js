import { axiosInstance } from "../axiosInstance";


export const uploadProductImages = async (images) => {
  try {
    const formData = new FormData();
    images.forEach((file) => {
      formData.append("images", file);
    });

    const response = await axiosInstance.post(
      "/seller/products/images",
      formData,
      {
        headers: { contentType: "multipart/form-data" },
      }
    );

    const filesUrls = response.data.files.map((file) => {
      return file.url;
    });

    return filesUrls;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

export const uploadProductPreviewImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axiosInstance.post(
      "/seller/products/preview",
      formData,
      {
        headers: { contentType: "multipart/form-data" },
      }
    );

    return response.data.file.url;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    console.log("product: ", product);
    const images = await uploadProductImages(product.images.map(img => img.file));
    const previewImage = await uploadProductPreviewImage(product.previewImage.file);
    product.images = images;
    product.previewImage = previewImage;
    const response = await axiosInstance.post(
      "/seller/products/create",
      product
    );

    return response.data;
  } catch (error) {
    console.error("Error publishing a product: ", error);
    throw error;
  }
};
