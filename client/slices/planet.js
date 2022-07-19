import { createSlice } from '@reduxjs/toolkit'

const planetSlice = createSlice({
  name: 'planet',
  initialState: '',
  reducers: {
    setPlanet: (state, { payload }) => (state = payload),
  },
  extraReducers: {},
})

export const selectPlanet = (state) => state.planet
export const { setPlanet } = planetSlice.actions
export default planetSlice.reducer
