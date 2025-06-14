import React from "react";
import DiscountBannar from "/DiscountBannar.png";
import { IconButton } from "../../ui";
import { ArrowRight } from "lucide-react";

const DiscountCard = ({ discount }) => {
  return (
    <div className="w-full relative my-8 md:my-12 lg:my-16 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Background container with gradient overlay */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 rounded-lg overflow-hidden">
        {/* Background image simulation with gradient */}
        <img src={DiscountBannar} alt="" className="w-full h-full" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="text-left pr-2 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20 max-w-full">
            {/* Summer Sale text */}
            <h2 className="uppercase mb-1 sm:mb-2 lg:mb-3 text-white font-normal text-xs sm:text-sm md:text-base lg:text-lg tracking-wider">
              summer sale
            </h2>

            {/* Discount percentage */}
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-1 sm:mb-2 lg:mb-4 text-white font-normal leading-tight">
              <span className="text-amber-600 font-semibold">{discount}%</span>{" "}
              OFF
            </h1>

            {/* Description text */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 lg:mb-6 xl:mb-8 max-w-[160px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[440px] leading-relaxed ml-auto">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>

            {/* Shop Now Button */}
            <IconButton
              end
              icon={<ArrowRight className="h-4 w-4" />}
              size={{ base: "small", sm: "small", md: "medium" }}
            >
              Shop Now
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
