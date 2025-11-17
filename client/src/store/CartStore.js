import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product, quantity) => set((state) => ({ cart: [...state.cart, { ...product, cartQuantity: quantity || 1 }] })),
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
    updateQuantity: (productId, newQuantity) => set((state) => ({ cart: state.cart.map((item) => item._id === productId ? { ...item, cartQuantity: newQuantity } : item) })),
    clearCart: () => set({ cart: [] }),
}))

export default useCartStore;