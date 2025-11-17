import React, { useState } from "react";
import {
  GridContainer,
  IconButton,
  Pagination,
  Select,
} from "../../components/ui";
import { LoaderCircle, Settings2 } from "lucide-react";
import CategoryFilters from "../../components/sections/Category/CategoryFilters";
import { NewsCard, ProductCard } from "../cards";
import { useFetchCategoryProducts } from "../../hooks/queries/useProducts";

const DataWithFilters = ({ category, type = "products", blogs }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 3;
  const shouldFetchProducts = type === "products" && category;


  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useFetchCategoryProducts(shouldFetchProducts ? category : null, {
    page: shouldFetchProducts ? page : 1,
    limit: shouldFetchProducts ? limit : 3,
  });

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  // Show error state
  if (isError) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="w-full px-6 sm:px-page space-y-6">
      {/* Header with filters toggle, sort, and count */}
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="">
          <IconButton
            end
            icon={<Settings2 />}
            size="medium"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
            Filters
          </IconButton>
        </div>

        {/* Sort by and product count */}
        <div
          className={`flex items-center justify-end md:justify-between transition-all duration-300 ease-in-out w-fit ${
            isFiltersOpen ? "w-full md:w-3/4" : "w-full"
          }`}>
          <div className="md:flex items-center gap-2 w-full sm:w-2/4 lg:w-1/4 hidden lg:min-w-[250px] ">
            <span className="text-sm whitespace-nowrap">Sort by</span>
            <Select options={[]} placeholder="Select" />
          </div>

          <div className="whitespace-nowrap">
            <span className="font-semibold text-black mr-1">
              {shouldFetchProducts && !isLoading && productsData.pagination.total}
            </span>
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
          }`}>
          <div className="min-w-max">
            <CategoryFilters />
          </div>
        </div>

        {/* Products grid */}
        <div
          className={`transition-all duration-300 ease-in-out h-full ${
            isFiltersOpen ? "w-full md:w-3/4" : "w-full"
          }`}>
          {isLoading ? (
            <div className="w-full h-full min-h-[40vh] bg-white flex items-center justify-center">
              <LoaderCircle className="animate-spin h-6 w-6 text-primary" />
            </div>
          ) : type === "products" ? (
            <GridContainer cols={3} gap={4}>
              {productsData.products.map((product, index) => (
                <ProductCard
                  key={product._id || index}
                  product={product}
                  className="rounded-lg"
                />
              ))}
            </GridContainer>
          ) : (
            type === "blogs" && (
              <GridContainer cols={2} gap={4}>
                {blogs.map((blog, index) => (
                  <NewsCard
                    key={blog._id || index}
                    blog={blog}
                    className="rounded-lg"
                  />
                ))}
              </GridContainer>
            )
          )}

          {shouldFetchProducts && !isLoading && (
            <Pagination
              currentPage={page}
              totalPages={productsData.pagination.pages}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DataWithFilters;
