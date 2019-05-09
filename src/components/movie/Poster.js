import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = () => ({})

// eslint-disable-next-line no-unused-vars
const Poster = ({ classes }) => {
  return <p>Poster</p>
}

Poster.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Poster)
