import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  root: {},
  actions: {
    padding: theme.spacing.unit,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    width: 250,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const View = ({ classes }) => {
  const [open, setOpen] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className={classes.root}>
      <DialogTitle className={classes.title}>Login</DialogTitle>
      <DialogContent className={classes.content}>
        <TextField
          label="Email"
          value={email}
          onChange={setEmail}
          margin="normal"
          variant="outlined"
          className={classes.textField}
        />
        <TextField
          label="Password"
          value={password}
          onChange={setPassword}
          margin="normal"
          variant="outlined"
          className={classes.textField}
        />
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button>Register</Button>
        <Button>Login</Button>
      </DialogActions>
    </Dialog>
  )
}

View.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(View)
