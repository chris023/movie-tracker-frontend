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
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { attemptLogin } from '../../../util/redux/actions'

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

const View = ({ classes, sendLogin }) => {
  const [open, setOpen] = useState(true)
  const [email, setEmail] = useState('tman2272@aol.com')
  const [password, setPassword] = useState('password')

  const loginHandler = e => {
    e.preventDefault()
    sendLogin({ email, password })
  }

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
              onClick={loginHandler}
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
  sendLogin: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  sendLogin: user => dispatch(attemptLogin(user)),
})

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(View)
