import React from "react";
import { DataWithFilters } from "../components/filters";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams()
  return (
    <DataWithFilters category={category} type="products" />
  );
};

export default Category;
