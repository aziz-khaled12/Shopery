import React from "react";
import Sales1 from "/Sales1.png";
import Sales2 from "/Sales2.png";
import Sales3 from "/Sales3.png";
import { SaleCard } from "../../cards";

const SalesSection = () => {
  return (
    <div className="flex items-center gap-2 justify-between flex-wrap sm:px-page px-6 py-[60px]">
      <SaleCard
        maintitle={"Sale of the Month"}
        textColor="white"
        subtitle={"BEST DEALS"}
        image={Sales1}
        timer
      ></SaleCard>
      <SaleCard
        maintitle={"Low-Fat Meat"}
        textColor="white"
        subtitle={"85% FAT FREE"}
        image={Sales3}
        price
        priceValue={79.99}
      ></SaleCard>
      <SaleCard
        maintitle={"100% Fresh Fruit"}
        subtitle={"SUMMER SALE"}
        image={Sales2}
        discount
        discountValue={64}
      ></SaleCard>
    </div>
  );
};

export default SalesSection;
