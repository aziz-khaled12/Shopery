import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="flex">
      <div className="w-[80px] flex flex-col justify-between items-center gap-3">
        <ChevronUp
          onClick={() => {
            if (selectedImage > 0) {
              setSelectedImage(selectedImage - 1);
            }
          }}
          className="cursor-pointer"
        />
        <div className="flex flex-col gap-2 w-full">
          {images.map((image) => (
            <img src={image} alt="slider image" className="w-full h-auto " />
          ))}
        </div>

        <ChevronDown
          onClick={() => {
            if (selectedImage < images.length - 1) {
              setSelectedImage(selectedImage + 1);
            }
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="w-[556px] aspect-square">
        <img
          src={images[selectedImage]}
          alt="big cabbage"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
