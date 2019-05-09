import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Root from './paths'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Root} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
