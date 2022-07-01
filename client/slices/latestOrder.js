import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'latestOrder',
  initialState: 'hello',
  reducers: {
    addLatestOrder: (state, action) => {
      state = 'world'
    },
  },
})

export default slice.reducer
export const { addLatestOrder } = slice.actions
