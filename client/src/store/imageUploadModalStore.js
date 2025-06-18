import { create } from "zustand";

const useImageUploadModalStore = create((set) => ({
    isOpen: false,
    handleOpen : () => set({ isOpen: true }),
    handleClose: () => set({ isOpen: false }),
}));

export default useImageUploadModalStore;