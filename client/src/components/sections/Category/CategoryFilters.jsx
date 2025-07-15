import React from "react";

import { Divider } from "../../ui";
import { CategoriesFilter, PriceFilter, RatingFilter, TagsFilter } from "../../filters";

const CategoryFilters = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <CategoriesFilter />
      <Divider />
      <PriceFilter />
      <Divider />
      <RatingFilter />
      <Divider />
      <TagsFilter />
    </div>
  );
};

export default CategoryFilters;
