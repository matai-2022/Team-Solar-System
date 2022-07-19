import { configureStore } from '@reduxjs/toolkit'
import pause from './slices/pause'
import planet from './slices/planet'

const store = configureStore({ reducer: { pause, planet } })

export default store
