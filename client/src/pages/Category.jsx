import React from "react";
import { products } from "../consts/ProductsConsts";
import { DataWithFilters } from "../components/filters";

const Category = () => {


  return (
    <DataWithFilters data={products} type="products" />
  );
};

export default Category;
