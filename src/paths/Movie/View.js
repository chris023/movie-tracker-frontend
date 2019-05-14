import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  DialogContent,
  IconButton,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'

const styles = theme => ({
  root: {
    overflowY: 'visible',
    minWidth: 920,
  },
  backdropImage: {
    width: '100%',
  },
  backIcon: {
    border: 'solid 3px #fff',
    left: theme.spacing.unit * 6,
    position: 'fixed',
    top: theme.spacing.unit * 4 + 48,
    zIndex: 999999999,
  },
  dialogContent: {
    height: 350,
    padding: 0,
    position: 'relative',
  },
  dialogContentFilter: {
    background: '#000',
    filter: 'opacity(.45)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  dialogPaper: {
    overflowY: 'visible',
  },
  dialogPosterContainer: {
    boxSizing: 'border-box',
    boxShadow: `0px 5px 5px 0px rgb(255, 255, 255, .1)`,
    bottom: theme.spacing.unit * 10,
    height: 450,
    position: 'absolute',
    right: theme.spacing.unit * 10,
    width: 300,
  },
  dialogTextContentContainer: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: `1fr ${300 + theme.spacing.unit * 10}px`,
    height: '100%',
    left: 0,
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 10}px`,
    position: 'absolute',
    top: 0,
  },
  movieOverview: {
    paddingTop: theme.spacing.unit * 3,
    textShadow: '#000 0px 0px 4px',
  },
  movieSubheader: {
    alignItems: 'flex-end',
    display: 'flex',
  },
  poster: {
    height: '100%',
    width: '100%',
  },
  ratingContainer: {
    marginRight: theme.spacing.unit,
    position: 'relative',
    width: 175,
  },
  ratingMask: {
    display: 'flex',
    left: 0,
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },
  ratingIcon: {
    color: '#fff',
  },
  ratingBackgroundIcon: {
    color: '#999',
  },
})

const Poster = ({
  classes,
  history,
  movies,
  match: {
    params: { movie_id },
  },
}) => {
  const [open, setOpen] = useState(true)
  const [movie, setMovie] = useState({
    vote_count: 0,
    id: null,
    video: null,
    vote_average: 0,
    title: '',
    popularity: 0,
    poster_path: '',
    original_language: null,
    original_title: '',
    genre_ids: [],
    backdrop_path: '',
    adult: null,
    overview: '',
    release_date: '',
  })

  const closeDialog = () => {
    setOpen(false)
    history.push('/')
  }

  useEffect(() => {
    if (movies) setMovie(movies.find(result => result.id === Number(movie_id)))
  }, [movies, movie_id])

  return (
    <>
      <Link to="/">
        <IconButton className={classes.backIcon}>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Dialog
        className={classes.root}
        open={open}
        fullWidth
        maxWidth="xl"
        onClose={closeDialog}
        PaperProps={{ classes: { root: classes.dialogPaper } }}
      >
        <DialogContent
          className={classes.dialogContent}
          style={{
            backgroundImage: `url(${'http://image.tmdb.org/t/p/w1280' +
              movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className={classes.dialogContentFilter} />
        <Paper className={classes.dialogPosterContainer}>
          <img
            className={classes.poster}
            src={'http://image.tmdb.org/t/p/w500' + movie.poster_path}
            alt={movie.title}
          />
        </Paper>
        <div className={classes.dialogTextContentContainer}>
          <div>
            <Typography variant="h4">{movie.title}</Typography>
            <div className={classes.movieSubheader}>
              <span className={classes.ratingContainer}>
                {[0, 1, 2, 3, 4].map((__, i) => (
                  <StarBorderIcon
                    key={'filled' + i}
                    fontSize="large"
                    className={classes.ratingBackgroundIcon}
                  />
                ))}
                <span
                  className={classes.ratingMask}
                  style={{
                    width: `calc(175px * ${movie.vote_average / 10} `,
                  }}
                >
                  {[0, 1, 2, 3, 4].map((__, i) => (
                    <StarIcon
                      key={'filled' + i}
                      fontSize="large"
                      className={classes.ratingIcon}
                    />
                  ))}
                </span>
              </span>
              <div>
                <Typography inline variant="subtitle1">
                  {movie.release_date + ' '}
                </Typography>
                <Typography inline>
                  {movie.original_language && `(${movie.original_language})`}
                </Typography>
              </div>
            </div>
            <Typography variant="subtitle1" className={classes.movieOverview}>
              {movie.overview}
            </Typography>
          </div>
          <div />
        </div>
      </Dialog>
    </>
  )
}

Poster.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  movies: PropTypes.array,
}

const mapStateToProps = state => ({
  movies: state.movies.results,
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Poster)
