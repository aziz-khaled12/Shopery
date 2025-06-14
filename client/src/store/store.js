import { configureStore } from '@reduxjs/toolkit'
import productModalReducer from './slices/ProductModalSlice'

export default configureStore({
  reducer: {
    productModal: productModalReducer,
  },
})