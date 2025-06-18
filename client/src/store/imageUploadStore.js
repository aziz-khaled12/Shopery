import { create } from "zustand";

const useImageUploadStore = create((set) => ({
    images: [],
    setImages: (images) => set({ images }), 
    addImage: (image) => set((state) => ({ images: [...state.images, image] })),
    removeImage: (index) => set((state) => ({ images: state.images.filter((_, i) => i !== index) })),
    clearImages: () => set({ images: [] }),
}));

export default useImageUploadStore;