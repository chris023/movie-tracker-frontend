import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = () => ({})

// eslint-disable-next-line no-unused-vars
const View = ({ classes }) => {
  return <p>Root</p>
}

View.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(View)
