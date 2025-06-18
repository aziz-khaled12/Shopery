import { create } from "zustand";
import { products } from "../consts/ProductsConsts";

const useProductsStore = create((set) => ({
  products: products,
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  removeProduct: (productId) => set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),
  updateProduct: (productId, updatedProduct) => set((state) => ({ 
    products: state.products.map((product) => product.id === productId ? updatedProduct : product) 
  })),
  getProduct: (productId) => {
    const state = useProductsStore.getState();
    return state.products.find((product) => product.id === productId);
  },
  getProducts: (productIds) => {
    const state = useProductsStore.getState();
    return state.products.filter((product) => productIds.includes(product.id));
  },
  clearProducts: () => set({ products: [] })
}));

export default useProductsStore;