import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Root from './paths'
import Auth from './paths/Auth'

// eslint-disable-next-line no-unused-vars
function App({ authenticated }) {
  return (
    <>
      <Route path="/" component={Root} />
      <Switch>
        <Route exact path="/login" component={Auth} />
        <Redirect to="/login" />
      </Switch>
    </>
  )
}

App.propTypes = {
  authenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  authenticated: state.login.success,
})

export default connect(mapStateToProps)(App)
