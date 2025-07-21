import React, { useEffect, useState } from "react";
import PreviewProduct from "../components/sections/AddProduct/PreviewProduct";
import { createProduct } from "../api/seller/products";
import {
  AddProductHeader,
  ProductInformationSection,
  PricingInventorySection,
  OrganizationSection,
  ProductImagesSection,
} from "../components/sections/AddProduct";
import { useAuthStore } from "../store/authStore";
import { Divider } from "../components/ui";

const AddProduct = () => {
  const { userId } = useAuthStore();

  const [formData, setFormData] = useState({
    sellerId: userId || "",
    name: "",
    category: "",
    description: "",
    price: 0,
    quantity: 0,
    previewImage: null,
    tags: [],
    brand: "",
    averageRating: 0,
    ratingCount: 0,
    unit: "",
    images: [],
    discount: {
      isActive: false,
      percentage: 0,
      price: 0,
      startDate: new Date(),
      endDate: new Date(),
    },
  });
  const [previewMode, setPreviewMode] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePreviewImageUpload = (e) => {
    if (formData.previewImage) return; // Only allow one
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      handleInputChange("previewImage", { file, previewUrl });
    }
  };

  const handleAdditionalImageUpload = (e) => {
    const maxAllowed = 4 - formData.images.length;
    if (maxAllowed <= 0) return;

    const files = Array.from(e.target.files || []).slice(0, maxAllowed);
    const newImages = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const removeAdditionalImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const removePreviewImage = () => {
    setFormData((prev) => ({
      ...prev,
      previewImage: null,
    }));
  };

  const handleSave = () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.description ||
      !formData.price ||
      !formData.quantity
    ) {
      console.log("Missing information");
      return;
    }
  };

  const handlePublish = () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.description ||
      !formData.price ||
      !formData.quantity
    ) {
      console.log("Missing information");
      return;
    }
    createProduct(formData);
    console.log("Product published!");
  };

  const calculateDiscountedPrice = () => {
    const price = parseFloat(formData.price) || 0;
    const discountValue = parseFloat(formData.discount.percentage) || 0;
    return price - (price * discountValue) / 100;
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      discount: {
        ...prev.discount,
        price: calculateDiscountedPrice(),
      },
    }));
  }, [formData.discount.percentage]);

  return (
    <div className="min-h-screen border border-gray-200 pb-6">
      <AddProductHeader
        previewMode={previewMode}
        setPreviewMode={setPreviewMode}
        handleSave={handleSave}
        handlePublish={handlePublish}
      />
    

      {!previewMode ? (
        <div className="grid grid-cols-1 gap-6 px-6">

            <ProductInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <Divider />
            <PricingInventorySection
              formData={formData}
              handleInputChange={handleInputChange}
              calculateDiscountedPrice={calculateDiscountedPrice}
            />
            <Divider />



            <OrganizationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <Divider />
            <ProductImagesSection
              formData={formData}
              handlePreviewImageUpload={handlePreviewImageUpload}
              handleAdditionalImageUpload={handleAdditionalImageUpload}
              removeAdditionalImage={removeAdditionalImage}
              removePreviewImage={removePreviewImage}
            />

        </div>
      ) : (
        <PreviewProduct formData={formData} />
      )}
    </div>
  );
};

export default AddProduct;
