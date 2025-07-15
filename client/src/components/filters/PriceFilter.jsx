import React, { useState } from "react";
import CategoryFilterItem from "./CategoryFilterItem";
import { DualRangeSlider } from "../../components/ui";
import useCategoryFiltersStore from "../../store/categoryFiltersStore";

const PriceFilter = () => {
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const { price, setPrice } = useCategoryFiltersStore();
  return (
    <CategoryFilterItem
      title="Price"
      isOpen={isPriceOpen}
      setIsOpen={setIsPriceOpen}
    >
      <>
        <DualRangeSlider
          min={0}
          max={2000}
          step={25}
          initialMin={200}
          initialMax={1500}
          onChange={(values) => setPrice(values)}
        />
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Price: </span>
          <span className="text-sm text-black font-medium">
            ${price.min} - ${price.max}
          </span>
        </div>
      </>
    </CategoryFilterItem>
  );
};

export default PriceFilter;
