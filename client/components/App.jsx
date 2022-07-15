import React from 'react'
import { createBrowserHistory } from 'history'
import { Route, Routes } from 'react-router-dom'
import BrowserRouter from '../BrowserRouter'
import SolarSystem from './SolarSystem'
import LandingPage from './LandingPage'

const history = createBrowserHistory({ window })

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solarsystem" element={<SolarSystem />} />
      </Routes>
    </BrowserRouter>
  )

  //insert react router
}

export default App
