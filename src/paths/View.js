import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core'
import MovieIcon from '@material-ui/icons/LocalMovies'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Header, Poster } from '../components/'

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
    minHeight: '100vh',
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
})

const View = ({ classes, fetchMovies, movies }) => {
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <div className={classes.root}>
      <Header />
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
)(View)
