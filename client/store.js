import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cart.js'

const store = configureStore({
  reducer: {
    cart,
  },
})

export default store
