import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, withStyles } from '@material-ui/core'
import Slider from '@material-ui/lab/Slider'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const styles = theme => ({
  appBar: {
    position: 'fixed',
    top: 64,
    zIndex: theme.zIndex.drawer - 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  comfyIcon: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  drawerSpacer: {
    width: 241,
  },
  slider: {
    width: 50,
  },
  sliderContainer: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: 'auto',
  },
  track: {
    backgroundColor: theme.palette.text.primary,
  },
  thumb: {
    backgroundColor: theme.palette.text.primary,
  },
  toolbar: {
    backgroundColor: theme.palette.primary.subheader,
  },
})

const View = ({ classes }) => {
  const [slider, setSlider] = useState(2)
  return (
    <>
      <div className={classes.appBarSpacer} />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.drawerSpacer} />
          <div className={classes.sliderContainer}>
            <div className={classes.slider}>
              <Slider
                min={3}
                max={12}
                step={1}
                value={slider}
                onChange={(_e, v) => setSlider(v)}
                classes={{
                  thumb: classes.thumb,
                  track: classes.track,
                }}
              />
            </div>
            <ViewComfyIcon className={classes.comfyIcon} />
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
