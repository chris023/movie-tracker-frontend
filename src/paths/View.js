import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const styles = () => ({})

// eslint-disable-next-line no-unused-vars
const View = ({ classes, fetchMovies, movies }) => {
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])
  // eslint-disable-next-line no-console
  console.log(movies)
  return <p>Root</p>
}

View.propTypes = {
  classes: PropTypes.object,
  fetchMovies: PropTypes.func,
  movies: PropTypes.object,
}

const mapStateToProps = ({ moviesReducer }) => ({
  movies: moviesReducer,
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch({ type: 'MOVIES/FETCH' }),
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(View)
