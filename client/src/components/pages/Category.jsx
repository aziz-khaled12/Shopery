import React, { useState } from "react";
import { GridContainer, IconButton, Pagination, Select } from "../ui";
import ProductCard from "../../features/products/product-card";
import CategoryFilters from "../sections/Category/CategoryFilters";
import { products } from "../../consts/ProductsConsts";
import { Settings2 } from "lucide-react";

const Category = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3x3 grid
  

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full px-6 md:px-page pb-20 space-y-6">
      {/* Header with filters toggle, sort, and count */}
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="">
          <IconButton
            end
            icon={<Settings2 />}
            size="medium"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            Filters
          </IconButton>
        </div>

        {/* Sort by and product count */}
        <div
          className={`flex items-center justify-end md:justify-between transition-all duration-300 ease-in-out w-fit ${
            isFiltersOpen ? "w-full md:w-3/4" : "w-full"
          }`}
        >
          <div className="md:flex items-center gap-2 w-full sm:w-2/4 lg:w-1/4 hidden lg:min-w-[250px] ">
            <span className="text-sm whitespace-nowrap">Sort by</span>
            <Select options={[]} placeholder="Select" />
          </div>

          <div className="whitespace-nowrap">
            <span className="font-semibold text-black mr-1">52</span>
            Products Found
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isFiltersOpen
              ? "w-full md:w-1/4 max-h-screen opacity-100"
              : "w-0 md:w-0 max-h-0 opacity-0"
          }`}
        >
          <div className="min-w-max">
            <CategoryFilters />
          </div>
        </div>

        {/* Products grid */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isFiltersOpen ? "w-full md:w-3/4" : "w-full"
          }`}
        >
          <GridContainer cols={3} gap={4}>
            {currentProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                className="rounded-lg"
              />
            ))}
          </GridContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            className="mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
