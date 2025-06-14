import React, { useState } from "react";
import useCategoryFiltersStore from "../../../store/categoryFiltersStore";
import { tagsOptions } from "../../../consts/FiltersConsts";
import CategoryFilterItem from "./CategoryFilterItem";
import { ChipSelect } from "../../ui";

const TagsFilter = () => {
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const { tags, setTags } = useCategoryFiltersStore();
  return (
    <CategoryFilterItem
      title="Popular Tags"
      isOpen={isTagsOpen}
      setIsOpen={setIsTagsOpen}
    >
      <ChipSelect options={tagsOptions} selected={tags} setSelected={setTags} />
    </CategoryFilterItem>
  );
};

export default TagsFilter;
