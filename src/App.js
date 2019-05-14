import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Root from './paths'
import Auth from './paths/Auth'
import MovieDetail from './paths/Movie'

function App({ authenticated }) {
  return (
    <>
      {!authenticated && <Auth />}
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/movie/:movie_id" component={MovieDetail} />
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
