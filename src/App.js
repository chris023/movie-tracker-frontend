import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Root from './paths'
import Auth from './paths/Auth'

function App() {
  return (
    <>
      <Auth />
      <Switch>
        <Route exact path="/" component={Root} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
