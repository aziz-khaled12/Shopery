import React from "react";
import {
  CategoriesFilter,
  PriceFilter,
  RatingFilter,
  TagsFilter,
} from "../../../features";
import { Divider } from "../../ui";

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
