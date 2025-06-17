import React from "react";
import { blogs } from "../consts/BlogsConsts";
import { DataWithFilters } from "../features";

const Blog = () => {
  return <DataWithFilters data={blogs} type="blogs" />;
};

export default Blog;
