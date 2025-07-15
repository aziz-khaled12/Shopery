import { useQuery } from "@tanstack/react-query";
import { fetchBlogs, fetchPublishedBlogs } from "../../api/shared/blogs";

export const useFetchBlogs = (options = {}) => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    ...options,
  });
};

export const useFetchPublishedBlogs = (options = {}) => {
  return useQuery({
    queryKey: ["blogs", "published"],
    queryFn: fetchPublishedBlogs,
    ...options,
  });
};

export const useFetchBlogById = (blogId, options = {}) => {
  return useQuery({
    queryKey: ["blogs", "published"],
    queryFn: fetchPublishedBlogs,
    ...options,
  });
};
