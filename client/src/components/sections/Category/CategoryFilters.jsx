import React, { useState } from "react";
import useCategoryFiltersStore from "../../../store/categoryFiltersStore";
import { categoryOptions, ratingOptions, tagsOptions } from "../../../consts/FiltersConsts";
import { CategoryFilterItem } from "../../common";
import { Checkbox, ChipSelect, Divider, DualRangeSlider, RadioList, StarRating } from "../../ui";


const CategoryFilters = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const {
    category,
    price,
    rating,
    tags,
    setCategory,
    setPrice,
    setRating,
    setTags,
  } = useCategoryFiltersStore();

  return (
    <div className="w-full">
      <CategoryFilterItem
        title="All Categories"
        isOpen={isCategoryOpen}
        setIsOpen={setIsCategoryOpen}
      >
        <RadioList
          options={categoryOptions}
          selected={category}
          onChange={setCategory}
          name="category"
        />
      </CategoryFilterItem>
      <div className="mb-5">
        <Divider />
      </div>
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
      <div className="mb-5">
        <Divider />
      </div>
      <CategoryFilterItem
        title="Rating"
        isOpen={isRatingOpen}
        setIsOpen={setIsRatingOpen}
      >
        <>
          <div className="w-full flex flex-col items-center gap-2">
            {ratingOptions.map((option, index) => (
              <div key={index} className="w-full flex items-center gap-3">
                <Checkbox
                  checked={rating === option.value}
                  onChange={() =>
                    rating === option.value
                      ? setRating(0)
                      : setRating(option.value)
                  }
                />
                <div className="flex items-center gap-2">
                  <StarRating rating={option.value} />
                  <span className="text-sm text-black">{option.label}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      </CategoryFilterItem>
      <div className="mb-5">
        <Divider />
      </div>

      <CategoryFilterItem
        title="Popular Tags"
        isOpen={isTagsOpen}
        setIsOpen={setIsTagsOpen}
      >
        <ChipSelect
          options={tagsOptions}
          selected={tags}
          setSelected={setTags}
        />
      </CategoryFilterItem>
    </div>
  );
};

export default CategoryFilters;
