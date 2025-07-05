import React, { useState } from "react";
import BigCabbage from "/BigCabbage.png";
import SliderImage1 from "/SliderImage1.png";
import SliderImage2 from "/SliderImage2.png";
import SliderImage3 from "/SliderImage3.png";

import { Divider, IconButton, IconButton2, Modal } from "../ui";
import {
  Facebook,
  Heart,
  Instagram,
  ShoppingCart,
  Star,
  Twitter,
} from "lucide-react";
import { useProductModalStore } from "../../store/productModalStore";
import Counter from "../ui/other/Counter";
import { ImageSlider } from "../ui";
import useCartStore from "../../store/cartStore";

const ProductModal = () => {
  const { isOpen, closeProductModal, product, resetProduct } =
    useProductModalStore();
  const [count, setCount] = useState(0);
  const { addToCart } = useCartStore();

  if (!product) return null;

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        closeProductModal();
        resetProduct();
      }}
    >
      <section className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl 2xl:min-w-7xl">
        <div className="w-full lg:w-1/2">
          <ImageSlider images={product.images} />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              {product.title}
            </h1>
            <div className="text-sm rounded-sm text-primary px-2 py-1 bg-primary/10 w-fit">
              In Stock
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full sm:items-center gap-4 sm:gap-7 mb-5">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (item) => (
                    <Star
                      key={item}
                      className="text-warning fill-warning h-4 w-4 lg:h-4.5 lg:w-4.5"
                    />
                  )
                )}
              </div>
              <p className="text-sm text-gray-500">4 Reviews</p>
            </div>

            <div className="text-sm text-gray-700 font-medium">
              SKU: <span className="text-gray-500 font-normal">2,51,594</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
            <div className="gap-1 flex items-center">
              <span className={` text-lg sm:text-xl ${product.discount.isActive ? "text-gray-300 line-through" : "text-gray-900"}  `}>
                ${product.price}
              </span>
              {product.discount.isActive && (
                <span className="text-xl sm:text-2xl font-medium text-hard-primary">
                  ${product.discount.price}
                </span>
              )}
            </div>
            {product.discount.isActive && (
              <div className="text-sm rounded-full text-danger px-3 py-1 bg-danger/10 font-medium w-fit">
                {product.discount.percentage}% Off
              </div>
            )}
          </div>

          <Divider />

          <div className="w-full my-6">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm">
                Brand:{" "}
                <span className="text-hard-primary font-medium">Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Share Item: </span>
                <IconButton2 icon={<Facebook />} />
                <IconButton2 icon={<Twitter />} />
                <IconButton2 icon={<Instagram />} />
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">{product.description}</p>
          </div>

          <Divider />

          <div className="flex items-center py-4 gap-3">
            <Counter count={count} setCount={setCount} />
            <IconButton
              end
              grow
              icon={
                <ShoppingCart
                  onClick={() => {
                    addToCart({ ...product, quantity: count });
                  }}
                />
              }
            >
              Add to Cart
            </IconButton>
            <IconButton2 icon={<Heart />} />
          </div>

          <Divider />

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6 mb-3">
            <div className="text-sm font-medium">Category:</div>
            <div className="text-sm text-gray-500">{product.category}</div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-2">
            <div className="text-sm font-medium">Tags:</div>
            <div className="text-sm text-gray-500">
              {product.tags.map((tag) => tag).join(", ")}
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default ProductModal;
