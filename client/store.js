import { configureStore } from '@reduxjs/toolkit'
import pause from './slices/pause'
import planet from './slices/planet'

export const reducers = { pause, planet }

const store = configureStore({ reducer: reducers })

export default store
