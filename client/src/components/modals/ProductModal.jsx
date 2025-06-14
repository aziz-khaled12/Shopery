import React, { useEffect, useState } from "react";
import BigCabbage from "/BigCabbage.png";
import SliderImage1 from "/SliderImage1.png";
import SliderImage2 from "/SliderImage2.png";
import SliderImage3 from "/SliderImage3.png";

import { IconButton, IconButton2, Modal, StarRating } from "../ui";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Heart,
  Instagram,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Twitter,
} from "lucide-react";
import { useProductModalStore } from "../../store/productModalStore";

const ProductModal = () => {
  const { isOpen, closeProductModal } = useProductModalStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [count, setCount] = useState(0);
  const images = [BigCabbage, SliderImage1, SliderImage2, SliderImage3];

  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);
  return (
    <Modal open={isOpen} onClose={() => closeProductModal()}>
      <div className="flex gap-6 w-full max-w-7xl">
        <div className="flex">
          <div className="w-[80px] flex flex-col justify-between items-center gap-3">
            <ChevronUp
              onClick={() => {
                if (selectedImage > 0) {
                  setSelectedImage(selectedImage - 1);
                }
              }}
              className="cursor-pointer"
            ></ChevronUp>
            <div className="flex flex-col gap-2 w-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="slider image"
                  className="w-full h-auto "
                />
              ))}
            </div>

            <ChevronDown
              onClick={() => {
                if (selectedImage < images.length - 1) {
                  setSelectedImage(selectedImage + 1);
                }
              }}
              className="cursor-pointer"
            ></ChevronDown>
          </div>
          <div className="w-[556px] aspect-square">
            <img
              src={images[selectedImage]}
              alt="big cabbage"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <h1 className="text-3xl font-semibold">Chinese Cabbage</h1>
            <div className="text-sm rounded-sm text-primary px-2 py-1 bg-primary/10">
              In Stock
            </div>
          </div>

          <div className="flex w-full items-center gap-7 mb-5">
            <div className="flex items-center gap-1.5">
              <StarRating rating={4} />
              <p className="text-sm text-gray-500">4 Reviews</p>
            </div>

            <div className="text-sm text-gray-700 font-medium">
              SKU: <span className="text-gray-500 font-normal">2,51,594</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <div className="gap-1 flex items-center">
              <span className="line-through text-xl text-gray-300">$48.00</span>
              <span className="line-through text-2xl font-medium text-hard-primary">
                $17.28
              </span>
            </div>
            <div className="text-sm rounded-full text-danger px-3 py-1 bg-danger/10 font-medium">
              64% Off
            </div>
          </div>

          <div className="w-full h-0.5 bg-gray-200"></div>

          <div className="w-full my-6">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                Brand:{" "}
                <span className="text-hard-primary font-medium">Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Share Item: </span>
                <IconButton2 icon={<Facebook className="h-4 w-4 md:h-5 md:w-5" />}></IconButton2>
                <IconButton2 icon={<Twitter className="h-4 w-4 md:h-5 md:w-5" />}></IconButton2>
                <IconButton2 icon={<Instagram className="h-4 w-4 md:h-5 md:w-5" />}></IconButton2>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4 max-w-xl">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
          </div>

          <div className="w-full h-0.5 bg-gray-200"></div>

          <div className="flex items-center py-4 gap-3">
            <div className="p-2 rounded-full gap-2  border-gray-200 border flex items-center justify-between">
              <IconButton2
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
                icon={<Minus />}
              ></IconButton2>
              <span className="min-w-5 text-center">{count}</span>
              <IconButton2
                onClick={() => setCount(count + 1)}
                icon={<Plus />}
              ></IconButton2>
            </div>
            <IconButton end grow icon={<ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />}>
              Add to Cart
            </IconButton>
            <IconButton2 icon={<Heart className="h-4 w-4 md:h-5 md:w-5" />} />
          </div>
          <div className="w-full h-0.5 bg-gray-200"></div>

          <div className="flex items-center gap-2 mt-6 mb-3">
            <div className="text-sm font-medium">Category:</div>
            <div className="text-sm text-gray-500">Vegetables</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">Tags:</div>
            <div className="text-sm text-gray-500">
              Vegetables Healthy Chinese Cabbage Green Cabbage
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
