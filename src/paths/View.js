import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  withStyles,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Poster } from '../components/movie'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  appBarSpacer: theme.mixins.toolbar,
  drawer: {
    background: theme.palette.primary.kindaDark,
    width: 240,
  },
  pushRight: {
    marginLeft: 'auto',
  },
})

const View = ({ classes, fetchMovies, movies, logout }) => {
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

  const handleLogout = () => {
    closeMenu()
    logout()
  }

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <IconButton onClick={openMenu}>
              <HomeIcon />
            </IconButton>
          </Link>
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
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex' }}>
        <Drawer variant="permanent" anchor="left" className={classes.drawer}>
          <div className={classes.appBarSpacer} />
        </Drawer>
        <Paper square className={classes.root}>
          <div className={classes.appBarSpacer} />
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
      </div>
    </>
  )
}

View.propTypes = {
  classes: PropTypes.object,
  fetchMovies: PropTypes.func,
  movies: PropTypes.object,
  logout: PropTypes.func,
}

const mapStateToProps = ({ movies }) => ({
  movies,
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch({ type: 'MOVIES/FETCH' }),
  logout: () => dispatch({ type: 'AUTH/LOGOUT' }),
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(View)
