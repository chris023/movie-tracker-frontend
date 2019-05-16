import React from 'react'
import PropTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
})

const View = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        {`Uh oh! There's nothing here. Add content to your library to see it here`}
      </Typography>
    </div>
  )
}

View.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(View)
