import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SolarSystem from './SolarSystem'
import LandingPage from './LandingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/solarsystem" element={<SolarSystem />} />
    </Routes>
  )
}

export default App
