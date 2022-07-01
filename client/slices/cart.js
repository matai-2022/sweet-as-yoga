import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const fetchFruits = createAsyncThunk('fruits/fetchFruits', async () => {
//   return await getFruits()
// })

// const slice = createSlice({
//   name: 'fruits',
//   initialState: [],
//   reducers: {},
//   extraReducers: {
//     [fetchFruits.fulfilled]: (state, { payload }) => payload,
//   },
// })

// export const selectFruits = (state) => state.fruits
// export default slice.reducer

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
