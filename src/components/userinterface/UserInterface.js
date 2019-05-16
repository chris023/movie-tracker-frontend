import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Drawer, Header, SubHeader } from '../'

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
    minHeight: '100vh',
  },
  body: {
    display: 'grid',
    gridTemplateColumns: '241px 1fr',
  },
})

const UserInterface = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <Header />
      <SubHeader />
      <div className={classes.body}>
        <Drawer />
        {children}
      </div>
    </div>
  )
}

UserInterface.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
}

export default withStyles(styles)(UserInterface)
