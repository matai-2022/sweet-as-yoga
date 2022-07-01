import { createSlice } from '@reduxjs/toolkit'

// import { fetchOrders, postOrder } from '../api'

// export const getOrders = createAsyncThunk('orders/getOrders', async () => {
//   const orders = await fetchOrders()
//   return orders
// })

const slice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addClass: (state, action) => {
      state.push(action.payload)
    },
  },
})

export default slice.reducer
export const { addClass } = slice.actions
