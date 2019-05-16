import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Auth, Movies } from './paths'
import { UserInterface } from './components'

const App = ({ authenticated }) => {
  if (!authenticated)
    return (
      <UserInterface>
        <Auth />
        <Movies />
      </UserInterface>
    )
  return (
    <UserInterface>
      <Switch>
        <Route path="/movies" component={Movies} />
        <Redirect to="/movies" />
      </Switch>
    </UserInterface>
  )
}

App.propTypes = {
  authenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  authenticated: state.login.success,
})

export default connect(mapStateToProps)(App)
