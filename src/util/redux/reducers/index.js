import { combineReducers } from 'redux'
import movies from './moviesReducer'
import login from './loginReducer'

export default combineReducers({
  movies,
  login,
})
