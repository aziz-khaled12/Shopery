import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSmallCard = ({ image }) => {
  return (
    <div className="w-full h-full relative flex items-start justify-start">
      <img src={image} alt="Small Banner" className="w-full h-auto"/>
      <div className="absolute flex flex-col p-3 md:p-7">
        <div className="mb-1 sm:mb-3 lg:mb-6">
          <h1 className="uppercase font-medium mb-2 text-xs sm:text-base">summer sale</h1>
          <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-3">75% OFF</h1>
          <p className="text-2xs sm:text-sm font-normal text-gray-500">
          Only Fruit & Vegetable</p>
        </div>

        <div className="flex items-center gap-3 font-semibold text-2xs sm:text-xs md:text-sm lg:text-base text-primary hover:text-hard-primary transition-all duration-200 cursor-pointer">
            <p>Shop Now</p> <ArrowRight className="h-4 w-4"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSmallCard;
