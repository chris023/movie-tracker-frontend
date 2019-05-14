import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, IconButton, withStyles } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addFav, removeFav } from '../../util/redux/actions'

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
  },
  favoritedIcon: {
    color: '#ddd',
  },
  iconButton: {
    color: '#999',
    ['&:hover']: {
      color: '#fff !important',
    },
    zIndex: 10,
  },
  poster: {
    width: '100%',
    height: '100%',
    zIndex: '-10',
  },
  overlay: {
    boxSizing: 'border-box',
    height: '100%',
    filter: 'opacity(0)',
    position: 'absolute',
    transition: '.2s',
    top: 0,
    width: '100%',
    ['&:hover']: {
      background: '#0006',
      border: `solid 2px ${theme.palette.secondary.main}`,
      filter: 'opacity(1)',
    },
  },
})

const Poster = ({
  addFavorite,
  classes,
  history,
  movie,
  removeFavorite,
  user_id,
  favorites,
}) => {
  const [isFavorite, setFavorite] = useState(false)

  useEffect(() => {
    if (favorites.find(favorite => movie.id === favorite.movie_id))
      return setFavorite(true)
    return setFavorite(false)
  }, [favorites, movie.id])

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

  const goToMovie = e => {
    if (e.target.classList.contains('Connect-Poster--overlay-356'))
      history.push('/movie/' + movie.id)
  }

  return (
    <Card className={classes.root} onClick={goToMovie}>
      <img
        className={classes.poster}
        src={'http://image.tmdb.org/t/p/w400' + movie.poster_path}
        alt={movie.title}
      />
      <div className={classes.overlay}>
        <IconButton onClick={toggleFavorite} className={classes.iconButton}>
          {isFavorite ? (
            <FavoriteIcon className={classes.favoritedIcon} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </div>
    </Card>
  )
}

Poster.propTypes = {
  classes: PropTypes.object,
  movie: PropTypes.object,
  addFavorite: PropTypes.func,
  history: PropTypes.object,
  removeFavorite: PropTypes.func,
  user_id: PropTypes.number,
  favorites: PropTypes.array,
}

const mapStateToProps = state => ({
  favorites: state.favorites.data,
  user_id: state.login.data.id,
})

const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFav(movie)),
  removeFavorite: movie => dispatch(removeFav(movie)),
})

export default compose(
  withRouter,
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Poster)
