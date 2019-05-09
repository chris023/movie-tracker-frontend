import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Poster } from '../components/movie'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
})

const View = ({ classes, fetchMovies, movies }) => {
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        {movies.results.map(movie => (
          <Grid item xs={3} key={movie.id}>
            <Poster movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
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
