import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, IconButton, withStyles } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { addFav, removeFav } from '../../util/redux/actions'

const styles = () => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
  },
  poster: {
    width: '100%',
    height: '100%',
    zIndex: '-10',
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
  },
})

const Poster = ({
  classes,
  movie,
  addFavorite,
  removeFavorite,
  user_id,
  favorites,
}) => {
  const isStoredFavorite = () =>
    favorites.includes(favorite => movie.id === favorite.movie_id)

  const [isFavorite, setFavorite] = useState(isStoredFavorite())
  const toggleFavorite = () => {
    switch (isFavorite) {
      case true:
        removeFavorite({
          movie_id: movie.id,
          user_id,
        })
        setFavorite(prev => !prev)
        break
      case false:
        addFavorite({
          movie_id: movie.id,
          user_id,
          title: movie.title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          overview: movie.overview,
        })
        setFavorite(prev => !prev)
        break
      default:
        return
    }
  }

  return (
    <Card className={classes.root}>
      <img
        className={classes.poster}
        src={'http://image.tmdb.org/t/p/w400' + movie.poster_path}
        alt={movie.title}
      />
      <div className={classes.content}>
        <IconButton onClick={toggleFavorite}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </Card>
  )
}

Poster.propTypes = {
  classes: PropTypes.object,
  movie: PropTypes.object,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  user_id: PropTypes.number,
  favorites: PropTypes.array,
}

const mapStateToProps = state => ({
  favorites: state.favorites.data ? state.favorites.data : [],
  user_id: state.login.data ? state.login.data.id : null,
})

const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFav(movie)),
  removeFavorite: movie => dispatch(removeFav(movie)),
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Poster)
