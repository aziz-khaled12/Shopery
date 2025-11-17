import React from "react";
import { blogs } from "../consts/BlogsConsts";
import { DataWithFilters } from "../components/filters";

const Blog = () => {
  return <DataWithFilters blogs={blogs} type="blogs" />;
};

export default Blog;
