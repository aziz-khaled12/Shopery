import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog, publishBlog } from "../../api/seller/blogs";

export const usePublishBlog = (BlogData, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => publishBlog(BlogData),
    mutationKey: ["blogs"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    ...options,
  });
};

export const useSaveBlog = (options = {}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (blogData) => createBlog(blogData),
    mutationKey: ["blogs"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    ...options,
  });
};
