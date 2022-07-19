import { createSlice } from '@reduxjs/toolkit'

const pauseSlice = createSlice({
  name: 'pause',
  initialState: false,
  reducers: { setPause: (state, { payload }) => (state = payload) },
  extraReducers: {},
})

export const selectPause = (state) => state.pause
export const { setPause } = pauseSlice.actions
export default pauseSlice.reducer
