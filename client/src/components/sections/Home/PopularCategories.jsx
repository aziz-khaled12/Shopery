import React from "react";
import { GridContainer, SectionHeader } from "../../ui";
import { useCategories } from "../../../hooks/queries/useCategories";
import { CategoryCard } from "../../cards";

const PopularCategories = () => {
  const { data, isPending } = useCategories();
  const categories = data
  console.log("categories: ", categories);
  return (
    <div className="sm:px-page px-6 py-[60px]">
      <SectionHeader title={"Popular Categories"} link={"/categories"} />
      <GridContainer gap={6} cols={6}>
        {!isPending && categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.label}
            image={category.image}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default PopularCategories;
