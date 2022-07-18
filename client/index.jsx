import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import store from './store'
import { Provider } from 'react-redux'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
