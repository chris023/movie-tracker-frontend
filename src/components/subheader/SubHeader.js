import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'
import Slider from '@material-ui/lab/Slider'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { setPosterSize } from '../../util/redux/actions/index'

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

const View = ({ classes, location, slider, setSlider }) => {
  const currentLibrary = () => {
    let library = location.pathname
      .split('/')
      .find(value =>
        ['movies', 'tvshows', 'podcasts', 'favorites'].includes(
          value.toLowerCase()
        )
      )
    try {
      if (library === 'tvshows') library = 'tv shows'
      return library[0].toUpperCase() + library.slice(1).toLowerCase()
    } catch {
      return ''
    }
  }
  return (
    <>
      <div className={classes.appBarSpacer} />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.drawerSpacer} />
          <Typography variant="h5" color="secondary">
            My {currentLibrary()}
          </Typography>
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
  slider: PropTypes.number,
  setSlider: PropTypes.func,
  location: PropTypes.object,
}

const mapStateToProps = state => ({
  slider: state.poster.size,
})

const mapDispatchToProps = dispatch => ({
  setSlider: size => dispatch(setPosterSize(size)),
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(View)
