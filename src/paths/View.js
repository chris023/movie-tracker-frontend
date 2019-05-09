import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Poster } from '../components/movie'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  appBarSpacer: theme.mixins.toolbar,
  pushRight: {
    marginLeft: 'auto',
  },
})

const View = ({ classes, fetchMovies, movies }) => {
  const [anchor, setAnchor] = useState(null)
  const [open, setOpen] = useState(false)
  const openMenu = ({ target }) => {
    setOpen(true)
    setAnchor(target)
  }
  const closeMenu = () => {
    setOpen(false)
    setAnchor(null)
  }

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Movie Tracker</Typography>
          <div className={classes.pushRight}>
            <IconButton onClick={openMenu}>
              <PersonIcon />
            </IconButton>
            <Menu
              anchorEl={anchor}
              open={open}
              onClose={closeMenu}
              PaperProps={{
                style: {
                  width: 200,
                },
              }}
            >
              <MenuItem>Log Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Paper square className={classes.root}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={16}>
          {movies.results.map(movie => (
            <Grid item xs={3} key={movie.id}>
              <Poster movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
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
