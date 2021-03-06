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
import { Redirect } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { attemptLogin, attemptRegister } from '../../../util/redux/actions'

const styles = theme => ({
  root: {},
  actions: {
    padding: 0,
    margin: 0,
  },
  activePanel: {
    borderBottom: 'none',
    borderTopRightRadius: `${theme.shape.borderRadius}px !important`,
    borderTopLeftRadius: `${theme.shape.borderRadius}px !important`,
  },
  button: {
    borderRadius: 0,
    height: 44,
    margin: 0,
    width: '50%',
  },
  content: {
    border: 'solid 1px #6d6d6d',
    borderTop: 'none',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  inActivePanel: {
    border: 'none',
    borderBottom: 'solid 1px #6d6d6d',
  },
  submitButton: {
    letterSpacing: 1,
    fontWeight: 700,
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

const View = ({ classes, sendLogin, sendRegister, authenticated }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('tman2272@aol.com')
  const [password, setPassword] = useState('password')
  const [password2, setPassword2] = useState('')
  const [panel, setPanel] = useState('login')

  const changePanel = e => {
    setPanel(e.target.innerText.toLowerCase())
    setName('')
    setEmail('')
    setPassword('')
    setPassword2('')
  }

  const submitHandler = e => {
    e.preventDefault()
    switch (panel) {
      case 'login':
        return sendLogin({ email, password })
      case 'register':
        return sendRegister({ name, email, password })
      default:
        return
    }
  }

  const loginOptions = (
    <>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        margin="normal"
        variant="outlined"
        className={classes.textField}
        required
      />
      <TextField
        label="Password"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        margin="normal"
        variant="outlined"
        className={classes.textField}
        required
      />
    </>
  )

  const registerOptions = (
    <>
      <TextField
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        margin="normal"
        variant="outlined"
        className={classes.textField}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        margin="normal"
        variant="outlined"
        className={classes.textField}
        required
      />
      <TextField
        label="Password"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        margin="normal"
        variant="outlined"
        className={classes.textField}
        required
      />
      <TextField
        label="Repeat Password"
        value={password2}
        type="password"
        onChange={e => setPassword2(e.target.value)}
        margin="normal"
        variant="outlined"
        className={classes.textField}
        required
      />
    </>
  )

  return (
    <>
      {authenticated && <Redirect to="/" />}
      <Dialog open={true} className={classes.root}>
        <form>
          <DialogActions className={classes.actions}>
            <Button
              className={
                panel === 'login'
                  ? `${classes.button} ${classes.buttonLeft} ${
                      classes.activePanel
                    }`
                  : `${classes.button} ${classes.buttonLeft} ${
                      classes.inActivePanel
                    }`
              }
              variant="outlined"
              onClick={changePanel}
            >
              Login
            </Button>
            <Button
              className={
                panel === 'register'
                  ? `${classes.button} ${classes.buttonRight} ${
                      classes.activePanel
                    }`
                  : `${classes.button} ${classes.buttonRight} ${
                      classes.inActivePanel
                    }`
              }
              variant="outlined"
              onClick={changePanel}
            >
              Register
            </Button>
          </DialogActions>
          <DialogContent className={classes.content}>
            {panel === 'login' ? loginOptions : registerOptions}
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.submitButton}
                onClick={submitHandler}
              >
                {/* {panel.split('')[0].toUpperCase() + panel.slice(1)} */}
                {panel.toUpperCase()}
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}

View.propTypes = {
  classes: PropTypes.object,
  sendLogin: PropTypes.func,
  sendRegister: PropTypes.func,
  authenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  authenticated: state.login.success,
})

const mapDispatchToProps = dispatch => ({
  sendLogin: user => dispatch(attemptLogin(user)),
  sendRegister: user => dispatch(attemptRegister(user)),
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(View)
