import { create } from "zustand";
import { getAllCategories, getAllTags } from "../api/extra";

export const useExtraDataStore = create((set) => {
  return {
    categories: [],
    tags: [],
    setCategories: (categories) => set({ categories }),
    setTags: (tags) => set({ tags }),
    resetExtraData: () => set({ categories: [], tags: [] }),

    getTags: async () => {
      const tags = await getAllTags();
      if (tags != set.tags) {
        set({ tags });
      }
    },

    getCategories: async () => {
      const categories = await getAllCategories();
      if (categories != set.categories) {
        set({ categories });
      }
    },
  };
});
