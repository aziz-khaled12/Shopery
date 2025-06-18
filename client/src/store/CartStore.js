import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, { ...product, quantity: product.quantity || 1 }] })),
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
    updateQuantity: (productId, newQuantity) => set((state) => ({ cart: state.cart.map((item) => item.id === productId ? { ...item, quantity: newQuantity } : item) })),
    clearCart: () => set({ cart: [] }),
}))

export default useCartStore;