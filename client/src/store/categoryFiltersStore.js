import { create } from "zustand";

const useCategoryFiltersStore = create((set) => ({
  category: [],
  price: { min: 0, max: 2000 },
  rating: 0,
  tags: [],

  setCategory: (category) => set({ category: category }),
  setPrice: (price) => set({ price: price }),
  setRating: (rating) => set({ rating: rating }),
  setTags: (tags) => set({ tags: tags }),
  resetFilters: () =>
    set({ category: [], price: { min: 0, max: 2000 }, rating: 0, tags: [] }),
}));

export default useCategoryFiltersStore;
