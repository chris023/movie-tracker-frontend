import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core'

import theme from './util/material-ui/theme'
import history from './util/router/history'
import { store, persistor } from './util/redux'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
