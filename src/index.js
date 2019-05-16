import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core'

import theme from './util/material-ui/theme'
import { store } from './util/redux'
import App from './App'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/movie-tracker-frontend">
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
