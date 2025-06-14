import React from "react";
import { GridContainer, Select } from "../ui";
import ProductCard from "../../features/products/product-card";
import CategoryFilters from "../sections/Category/CategoryFilters";
import { products } from "../../consts/ProductsConsts";

const Category = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 px-6 md:px-page">
      {/* Filters - full width on mobile, 1/4 on desktop */}
      <div className="w-full md:w-1/4">
        <CategoryFilters />
      </div>

      {/* Content - full width on mobile, 3/4 on desktop */}
      <div className="w-full md:w-3/4">
        {/* Filters Header */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-500 w-full gap-4 sm:gap-0">
          {/* Sort dropdown - full width on mobile, auto width on larger screens */}
          <div className="flex items-center gap-2 w-full sm:w-1/4">
            <span className="text-sm whitespace-nowrap">Sort by</span>
            <Select options={[]} placeholder="Select" />
          </div>

          {/* Product count - right-aligned */}
          <div className="whitespace-nowrap">
            <span className="font-semibold text-black mr-1">52</span>
            Products Found
          </div>
        </div>

        {/* Products */}

        <GridContainer cols={3} gap={4}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              price={product.price}
              rating={product.rating}
              title={product.title}
              className="rounded-lg"
            />
          ))}
        </GridContainer>
      </div>
    </div>
  );
};

export default Category;
