import { combineReducers } from 'redux'
import movies from './moviesReducer'
import login from './loginReducer'
import favorites from './favoritesReducer'
import poster from './posterReducer'

export default combineReducers({
  movies,
  login,
  poster,
  favorites,
})
