import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Library, MovieDetail } from './'

const View = () => {
  return (
    <Switch>
      <Route path="/movies/:movie_id" component={MovieDetail} />
      <Route path="/movies" component={Library} />
      <Redirect to="/movies" />
    </Switch>
  )
}

View.propTypes = {
  authenticated: PropTypes.bool,
}

export default View
