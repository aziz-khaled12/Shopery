import React, { useEffect, useState } from "react";
import PreviewProduct from "../components/sections/AddProduct/PreviewProduct";
import { uploadProductImages, uploadProductPreviewImage } from "../api/products";
import ImageUploadModal from "../components/modals/ImageUploadModal";
import {
  AddProductHeader,
  ProductInformationSection,
  PricingInventorySection,
  OrganizationSection,
  ProductImagesSection
} from "../components/sections/AddProduct";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: 0,
    quantity: 0,
    previewImage: null,
    additionalImages: [],
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
    },
  });
  const [previewMode, setPreviewMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleImageUpload = (files) => {
    setFormData({...formData, additionalImages: files});
    handleClose();
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePreviewImageUpload = async (e) => {
    const file = e.target.files[0];
    const previewImage = await uploadProductPreviewImage(file);
    handleInputChange("previewImage", previewImage);
  };

  const handleAdditionalImageUpload = async (e) => {
    if (formData.additionalImages <= 5) {
      const files = Array.from(e.target.files || []);
      const additionalImages = await uploadProductImages(files);
      setFormData((prev) => ({
        ...prev,
        additionalImages: [...prev.additionalImages, ...additionalImages],
      }));
    }
  };

  const removeAdditionalImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      additionalImages: prev.additionalImages.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    if (
      !formData.title ||
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
      !formData.title ||
      !formData.category ||
      !formData.description ||
      !formData.price ||
      !formData.quantity
    ) {
      console.log("Missing information");
      return;
    }
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
    <div className="min-h-screen px-6 sm:px-page">
      <AddProductHeader
        previewMode={previewMode}
        setPreviewMode={setPreviewMode}
        handleSave={handleSave}
        handlePublish={handlePublish}
      />

      {!previewMode ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <main className="lg:col-span-2 space-y-6">
            <ProductInformationSection 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />
            <PricingInventorySection
              formData={formData}
              handleInputChange={handleInputChange}
              calculateDiscountedPrice={calculateDiscountedPrice}
            />
          </main>

          <aside className="space-y-6">
            <OrganizationSection 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />
            <ProductImagesSection
              formData={formData}
              handlePreviewImageUpload={handlePreviewImageUpload}
              handleAdditionalImageUpload={handleAdditionalImageUpload}
              removeAdditionalImage={removeAdditionalImage}
              setIsOpen={setIsOpen}
            />
          </aside>
        </div>
      ) : (
        <PreviewProduct formData={formData} />
      )}
      
      <ImageUploadModal
        isOpen={isOpen}
        onClose={handleClose}
        onUpload={handleImageUpload}
      />
    </div>
  );
};

export default AddProduct;