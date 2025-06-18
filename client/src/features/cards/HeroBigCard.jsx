import React from "react";
import { ArrowRight } from "lucide-react";
import { IconButton } from "../../components/ui";

const HeroBigCard = ({ image }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-start">
      <img src={image} alt="Big Banner" className="w-full h-auto"/>
      <div className="absolute flex flex-col gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-7 pl-6 sm:pl-[30px] xl:pl-[60px]">
        <div className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">
          <h1>Fresh & Healthy</h1>
          <h1>Organic Food</h1>
        </div>
        <div className="w-full flex gap-3 items-center ">
          <div className="w-0.5 self-stretch bg-white/70"></div>
          <div className="w-full">
            <p className="text-white text-xs lg:text-xl font-medium mb-3">
              Sale up to{" "}
              <span className="py-1 px-3 bg-warning font-semibold rounded-md">
                50% OFF
              </span>{" "}
            </p>
            <p className="text-2xs lg:text-sm font-normal text-white/70">
              Free shipping on all your order.
            </p>
          </div>
        </div>
        <IconButton end icon={<ArrowRight className="h-4 w-4" />} fillWhite size={{ base: "small", sm: "medium" }}>
          Shop Now
        </IconButton>
      </div>
    </div>
  );
};

export default HeroBigCard;
