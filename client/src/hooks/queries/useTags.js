import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../../api/shared/tags";

export const useTags = (options = {}) => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    select: (data) =>
      data.tags.map((tag) => ({
        label: tag.name,
        value: tag._id,
      })),
    ...options,
  });
};
