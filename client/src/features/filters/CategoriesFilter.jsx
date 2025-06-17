import React, { useState } from "react";
import CategoryFilterItem from "./CategoryFilterItem";
import { categoryOptions } from "../../consts/FiltersConsts";
import useCategoryFiltersStore from "../../store/categoryFiltersStore";
import { RadioList } from "../../components/ui";

const CategoriesFilter = () => {  
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { category, setCategory } = useCategoryFiltersStore();

  return (
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
  );
};

export default CategoriesFilter;
