import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  withStyles,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  pushRight: {
    marginLeft: 'auto',
  },
})

const View = ({ classes, logout }) => {
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

  return (
    <>
      <div className={classes.appBarSpacer} />
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
    </>
  )
}

View.propTypes = {
  classes: PropTypes.object,
  logout: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'AUTH/LOGOUT' }),
})

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(View)
