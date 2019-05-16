import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Poster } from '../../../components'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 4,
  },
})

const Library = ({ classes, fetchMovies, movies }) => {
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <Paper square className={classes.paper}>
      <Grid container spacing={32}>
        {movies &&
          movies.results &&
          movies.results.map(movie => (
            <Grid item xs={2} key={movie.id}>
              <Poster movie={movie} />
            </Grid>
          ))}
      </Grid>
    </Paper>
  )
}

Library.propTypes = {
  classes: PropTypes.object,
  fetchMovies: PropTypes.func,
  movies: PropTypes.object,
}

const mapStateToProps = ({ movies }) => ({
  movies,
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
)(Library)
