import React, { useLayoutEffect, useReducer } from 'react'
import { Router } from 'react-router-dom'

export default function BrowserRouter({ children, history }) {
  let [state, dispatch] = useReducer((_, action) => action, {
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(dispatch), [history])

  return (
    <Router
      children={children}
      action={state.action}
      location={state.location}
      navigator={history}
    />
  )
}
