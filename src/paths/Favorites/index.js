import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Poster } from '../../components'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 4,
  },
})

const Favorites = ({ classes, fetchMovies, movies, favorites, posterSize }) => {
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <div className={classes.paper}>
      {favorites.length ? (
        <Grid container spacing={32}>
          {favorites.map(favorite => {
            const movie = movies.find(movie => movie.id === favorite.movie_id)
            return (
              <Grid item xs={posterSize} key={'fav' + movie.id}>
                <Poster movie={movie} />
              </Grid>
            )
          })}
        </Grid>
      ) : (
        <Typography variant="h5">
          {`Uh oh! There's nothing here. Favorite content in your library to see it here`}
        </Typography>
      )}
    </div>
  )
}

Favorites.propTypes = {
  classes: PropTypes.object,
  fetchMovies: PropTypes.func,
  favorites: PropTypes.array,
  movies: PropTypes.array,
  posterSize: PropTypes.number,
}

const mapStateToProps = ({ favorites, movies, poster }) => ({
  favorites: favorites.data,
  movies: movies.results,
  posterSize: poster.size,
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
)(Favorites)
