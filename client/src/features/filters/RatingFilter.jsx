import React, { useState } from "react";
import CategoryFilterItem from "./CategoryFilterItem";
import { ratingOptions } from "../../consts/FiltersConsts";
import { Checkbox, StarRating } from "../../components/ui";
import useCategoryFiltersStore from "../../store/categoryFiltersStore";

const RatingFilter = () => {
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const { rating, setRating } = useCategoryFiltersStore();
  return (
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
  );
};

export default RatingFilter;
