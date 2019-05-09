import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Root from './paths'
import Auth from './paths/Auth'

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Auth} />
        <Redirect to="/login" />
      </Switch>
      <Root />
    </>
  )
}

export default App
