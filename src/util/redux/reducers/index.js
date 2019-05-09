import { combineReducers } from 'redux'
import movies from './moviesReducer'
import login from './loginReducer'
import favorites from './favoritesReducer'

export default combineReducers({
  movies,
  login,
  favorites,
})
