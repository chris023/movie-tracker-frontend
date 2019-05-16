import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Auth, Favorites, Movies, Podcasts, TVShows } from './paths'
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
        <Route path="/favorites" component={Favorites} />
        <Route path="/podcasts" component={Podcasts} />
        <Route path="/tvshows" component={TVShows} />
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
