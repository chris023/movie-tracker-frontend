import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, IconButton, withStyles } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

const styles = () => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
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

const Poster = ({ classes, movie }) => {
  const [isFavorite, setFavorite] = useState(false)
  const toggleFavorite = () => setFavorite(prev => !prev)

  return (
    <Card className={classes.root}>
      <img
        className={classes.poster}
        src={'http://image.tmdb.org/t/p/w400' + movie.poster_path}
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
}

export default withStyles(styles)(Poster)
