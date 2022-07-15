import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SolarSystem from './SolarSystem'
import LandingPage from './LandingPage'

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solarsystem" element={<SolarSystem />} />
      </Routes>
    </div>
  )
}

export default App
