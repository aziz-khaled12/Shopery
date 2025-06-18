import React from "react";
import { products } from "../consts/ProductsConsts";
import DataWithFilters from "../features/filters/DataWithFilters";

const Category = () => {


  return (
    <DataWithFilters data={products} type="products" />
  );
};

export default Category;
