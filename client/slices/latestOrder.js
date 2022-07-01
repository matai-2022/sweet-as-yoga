import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'latestOrder',
  initialState: 'hello',
  reducers: {
    addLatestOrder: (state, action) => {
      return action.payload
    },
  },
})

export default slice.reducer
export const { addLatestOrder } = slice.actions
