import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../api/shared/categories";

export const useCategories = (options = {}) => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    select: (data) =>
      data.categories.map((category) => ({
        label: category.name,
        value: category._id,
      })),
    ...options,
  });
};
