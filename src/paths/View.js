import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import MovieIcon from '@material-ui/icons/LocalMovies'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Poster } from '../components/movie'

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
    minHeight: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  body: {
    display: 'grid',
    gridTemplateColumns: '241px 1fr',
  },
  drawerTitle: {
    marginTop: `${theme.spacing.unit * 4}px`,
    paddingLeft: theme.spacing.unit * 4,
  },
  libraryList: {
    color: theme.palette.text.secondary,
    width: 240,
  },
  listItem: {
    paddingLeft: theme.spacing.unit * 6,
  },
  paper: {
    padding: theme.spacing.unit * 4,
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
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton>
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
      <div className={classes.body}>
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            style: {
              backgroundColor: '#242424',
            },
          }}
        >
          <div className={classes.appBarSpacer} />
          <Typography
            color="secondary"
            variant="h4"
            className={classes.drawerTitle}
          >
            Library
          </Typography>
          <List className={classes.libraryList}>
            <ListItem button disableGutters className={classes.listItem}>
              <MovieIcon />
              <ListItemText primary={'Movies'} />
            </ListItem>
          </List>
        </Drawer>
        <Paper square className={classes.paper}>
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
    </div>
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
