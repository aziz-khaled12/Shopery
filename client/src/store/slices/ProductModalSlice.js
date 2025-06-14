import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

const productModalSlice = createSlice({
    name: "productModal",
    initialState,
    reducers: {
        openProductModal: (state) => {
            state.isOpen = true;
            console.log("openProductModal");
        },
        closeProductModal: (state) => {
            state.isOpen = false;
        },      
    }
})

export const { openProductModal, closeProductModal } = productModalSlice.actions;
export default productModalSlice.reducer;   