import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  root: {},
  actions: {
    padding: 0,
    margin: 0,
  },
  button: {
    borderRadius: 0,
    height: 44,
    margin: 0,
    width: '50%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  submitButton: {
    margin: `${theme.spacing.unit}px 0`,
    width: '100%',
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
      <form>
        <DialogActions className={classes.actions}>
          <Button
            className={`${classes.button} ${classes.buttonLeft}`}
            variant="outlined"
          >
            Login
          </Button>
          <Button
            className={`${classes.button} ${classes.buttonRight}`}
            variant="outlined"
          >
            Register
          </Button>
        </DialogActions>
        <DialogContent className={classes.content}>
          <TextField
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            margin="normal"
            variant="outlined"
            className={classes.textField}
          />
          <DialogActions>
            <Button
              variant="contained"
              type="submit"
              className={classes.submitButton}
            >
              Submit
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  )
}

View.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(View)
