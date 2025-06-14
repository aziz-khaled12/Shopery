import React from "react";
import HoverableSVG from "../../../assets/svg/HoverableSVG";

const Carousel = () => {
  const paths = [
    "/step.svg",
    "/mango.svg",
    "/gseries.svg",
    "/group.svg",
    "/food.svg",
  ];

  return (
    <div className="w-full flex items-center justify-between sm:px-page px-6 my-[60px]">
      {paths.map((path, index) => {
        return <HoverableSVG key={index} src={path} />;
      })}
    </div>
  );
};

export default Carousel;
