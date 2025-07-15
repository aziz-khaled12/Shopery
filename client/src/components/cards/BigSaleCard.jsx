import React from "react";
import { ArrowRight } from "lucide-react";
import { Countdown, IconButton } from "../ui";

const BigSaleCard = ({
  image,
  maintitle,
  subtitle,
  discount = false,
  discountValue = 0,
  price = false,
  priceValue = 0,
  timer = true,
  textColor = "auto", // "auto", "black", or "white"
  align = "left", // "left", "center", or "right"
}) => {
  // Ensure only one option is active at a time
  const showDiscount = discount;
  const showPrice = !showDiscount && price;
  const showTimer = !showDiscount && !showPrice && timer;

  // Alignment classes
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-start text-center",
    right: "items-start text-left",
  };

  // Position classes
  const positionClasses = {
    left: "left-4 sm:left-10",
    center: "left-1/2 transform -translate-x-1/2",
    right: "right-4 sm:right-10",
  };

  // Determine text color class
  const textColorClass = textColor === "auto" 
    ? "text-black mix-blend-luminosity" 
    : textColor === "black" 
      ? "text-black" 
      : "text-white";

  return (
    <div className="relative w-full rounded-md overflow-hidden">
      {/* Background Image */}
      <img 
        src={image} 
        alt={maintitle} 
        className="w-full h-auto min-h-[300px] object-cover" 
        loading="lazy"
      />

      {/* Content Overlay */}
      <div 
        className={`absolute top-0 h-full w-fit max-w-2xl flex flex-col justify-center ${positionClasses[align]} ${alignmentClasses[align]} p-4 sm:p-10`}
      >
        <div className={`uppercase mb-2 font-medium ${textColorClass} text-sm sm:text-base`}>
          {subtitle}
        </div>
        <h2 className={`font-semibold text-3xl sm:text-4xl mb-2 ${textColorClass}`}>
          {maintitle}
        </h2>

        {showDiscount && (
          <div className={`text-lg flex ${align === 'center' ? 'justify-center' : ''} gap-2 ${textColorClass}`}>
            Up to{" "}
            <div className="bg-black rounded-md py-1.5 px-3 font-semibold overflow-hidden relative">
              <span className="text-white">
                {discountValue}% OFF
              </span>
            </div>
          </div>
        )}

        {showPrice && (
          <div className={`flex ${align === 'center' ? 'justify-center' : ''} gap-2 text-lg ${textColorClass}`}>
            Started at <div className={`text-xl font-semibold ${textColorClass}`}>${priceValue.toFixed(2)}</div>
          </div>
        )}

        {showTimer && (
          <div className={`${textColorClass} ${align === 'center' ? 'mx-auto' : ''}`}>
            <Countdown targetDate={"2025-06-01"} />
          </div>
        )}

        <div className={`mt-6 ${align === 'center' ? 'mx-auto' : ''}`}>
          <IconButton end icon={<ArrowRight className="h-4 w-4" />}>
            Shop Now
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default BigSaleCard;