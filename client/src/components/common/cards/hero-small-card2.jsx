
import { ArrowRight } from "lucide-react";
import React from "react";

const HeroSmallCard2 = ({ image }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <img src={image} alt="Small Banner" className="w-full h-auto"/>
      <div className="absolute flex flex-col items-center text-center text-white">
        <div className="mb-1 sm:mb-3 lg:mb-6">
          <h1 className="uppercase font-medium mb-2 text-xs sm:text-base">summer sale</h1>
          <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold">Special Products </h1>
          <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold">Deal of the Month</h1>
        </div>

        <div className="flex items-center gap-3 font-semibold text-2xs sm:text-xs md:text-sm lg:text-base text-primary hover:text-hard-primary transition-all duration-200 cursor-pointer">
          <p>Shop Now</p> <ArrowRight className="h-4 w-4"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSmallCard2;
