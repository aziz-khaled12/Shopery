import { create } from "zustand";

export const useProductModalStore = create((set) => ({
  isOpen: false,
  openProductModal: () => set({ isOpen: true }),
  closeProductModal: () => set({ isOpen: false }),
}))
