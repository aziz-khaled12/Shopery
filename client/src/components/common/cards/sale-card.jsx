import React from "react";
import { Countdown, IconButton } from "../../ui";
import { ArrowRight } from "lucide-react";

const SaleCard = ({
  image,
  maintitle,
  subtitle,
  discount = false,
  discountValue = 0,
  price = false,
  priceValue = 0,
  timer = true,
  textColor = "auto", // "auto", "black", or "white"
}) => {
  // Ensure only one option is active at a time
  const showDiscount = discount;
  const showPrice = !showDiscount && price;
  const showTimer = !showDiscount && !showPrice && timer;

  // Determine text color class
  const textColorClass = textColor === "auto" 
    ? "text-black mix-blend-luminosity" 
    : textColor === "black" 
      ? "text-black" 
      : "text-white";

  return (
    <div className="relative w-full max-w-[424px] flex justify-center rounded-md">
      <div className="absolute text-center top-9 w-full flex flex-col items-center justify-center">
        <div className={`uppercase mb-2 font-medium ${textColorClass}`}>{subtitle}</div>
        <div className={`font-semibold text-4xl mb-2 ${textColorClass}`}>{maintitle}</div>

        {showDiscount && (
          <div className={`text-lg flex items-center gap-2 ${textColorClass}`}>
            Up to{" "}
            <div className="bg-black rounded-md py-1.5 px-3 font-semibold overflow-hidden relative">
              <span className="text-white">
                {discountValue}% OFF
              </span>
            </div>
          </div>
        )}

        {showPrice && (
          <div className={`flex items-center gap-2 text-lg ${textColorClass}`}>
            Started at <div className={`text-xl font-semibold text-amber-600`}>${priceValue.toFixed(2)}</div>
          </div>
        )}

        {showTimer && <div className={textColorClass}><Countdown targetDate={"2025-06-22"} /></div>}
        <div className="mt-6">
          <IconButton fillWhite end icon={<ArrowRight className="h-4 w-4" />}>
            Shop Now
          </IconButton>
        </div>
      </div>
      <img src={image} alt={maintitle} className="rounded-md w-full h-auto" />
    </div>
  );
};

export default SaleCard;