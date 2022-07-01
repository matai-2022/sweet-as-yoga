import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cart.js'
import latestOrder from './slices/latestOrder.js'
const store = configureStore({
  reducer: {
    cart,
    latestOrder,
  },
})

export default store
