import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import MovieIcon from '@material-ui/icons/LocalMovies'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
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
  navLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  navLinkActive: {
    color: theme.palette.secondary.main,
  },
})

const View = ({ classes }) => {
  return (
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
        <NavLink
          to="/movies"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
        >
          <ListItem button disableGutters className={classes.listItem}>
            <MovieIcon />
            <ListItemText primary={'Movies'} />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  )
}

View.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(View)
