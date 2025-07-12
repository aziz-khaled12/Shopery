import React, { useState } from "react";
import {
  Counter,
  IconButton,
  IconButton2,
  ImageSlider,
  StarRating,
} from "../../ui";
import {
  Facebook,
  Heart,
  Instagram,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import { useCategories } from "../../../hooks/queries/useCategories";
import { useTags } from "../../../hooks/queries/useTags";

const PreviewProduct = ({ formData }) => {
  const [count, setCount] = useState(0);
const images = [formData.previewImage?.previewUrl, ...formData.images.map(img => img.previewUrl)];

  const categories = useCategories().data;
  const tags = useTags().data;

  console.log("tags: ", tags);

  const getCategoryById = (id) => {
    const category = categories.find((cat) => cat.value === id);
    return category ? category.label : "Unknown Category";
  };
  const getTagsById = (id) => {
    const tag = tags.find((tag) => tag.value === id);
    return tag ? tag.label: "Unknown Tag";
  };

  return (
    /* Preview Mode */
    <section className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl">
      <div className="w-full lg:w-1/2">
        <ImageSlider images={images} />
      </div>

      <div className="w-full lg:w-1/2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {formData.title}
          </h1>
          <div
            className={`text-sm rounded-sm px-2 py-1 w-fit ${
              formData.quantity > 0
                ? "bg-primary/10 text-primary"
                : "bg-danger/10 text-danger"
            }`}
          >
            {formData.quantity > 0 ? "In Stock" : "Out of Stock"}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:items-center gap-4 sm:gap-7 mb-5">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              <StarRating rating={formData.averageRating} />
            </div>
            <p className="text-sm text-gray-500">
              {formData.ratingCount} Reviews
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
          <div className="gap-1 flex items-center">
            <span
              className={`${
                formData.discount.isActive
                  ? "line-through text-lg sm:text-xl text-gray-300"
                  : "text-xl sm:text-2xl font-medium text-hard-primary"
              } `}
            >
              ${Number.parseInt(formData.price).toFixed(2)}
            </span>
            {formData.discount.isActive && (
              <span className="text-xl sm:text-2xl font-medium text-hard-primary">
                ${formData.discount.price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="text-sm rounded-full text-danger px-3 py-1 bg-danger/10 font-medium w-fit">
            {formData.discount.isActive &&
              `${formData.discount.percentage}% Off`}
          </div>
        </div>

        <div className="w-full h-0.5 bg-gray-200"></div>

        <div className="w-full my-6">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm">
              Brand:{" "}
              <span className="text-hard-primary font-medium">
                {formData.brand}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Share Item: </span>
              <IconButton2 icon={<Facebook />} />
              <IconButton2 icon={<Twitter />} />
              <IconButton2 icon={<Instagram />} />
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">{formData.description}</p>
        </div>

        <div className="w-full h-0.5 bg-gray-200"></div>

        <div className="flex items-center py-4 gap-3">
          <Counter count={count} setCount={setCount} />
          <IconButton end grow icon={<ShoppingCart />}>
            Add to Cart
          </IconButton>
          <IconButton2 icon={<Heart />} />
        </div>

        <div className="w-full h-0.5 bg-gray-200"></div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6 mb-3">
          <div className="text-sm font-medium">Category:</div>
          <div className="text-sm text-gray-500">
            {getCategoryById(formData.category)}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
          <div className="text-sm font-medium">Tags:</div>
          <div className="text-sm text-gray-500">
            {formData.tags.map((tag) => getTagsById(tag)).join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewProduct;
