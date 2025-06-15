import React from "react";
import { blogs } from "../../consts/BlogsConsts";
import DataWithFilters from "../common/filters/DataWithFilters";

const Blog = () => {
  return <DataWithFilters data={blogs} type="blogs" />;
};

export default Blog;
