import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  root: {},
})

// eslint-disable-next-line no-unused-vars
const Poster = ({ classes, movie, match: { params } }) => {
  // eslint-disable-next-line no-console
  console.log(params)
  return <p>hi</p>
}

Poster.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  movie: PropTypes.object,
}

export default withStyles(styles)(Poster)
