import {
  fetchFailed,
  getFavorites,
  loginFailed,
  loginSuccess,
  registerFailed,
  registerSuccess,
  setFavorites,
  setMovies,
} from '../actions'
import tmdbApiKey from '../../apiKeys/TheMovieDB'
import db_path from '../../../config'

import { takeLatest, put, call } from 'redux-saga/effects'

function* fetchMovies() {
  try {
    const movies = yield call(async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=' + tmdbApiKey
      )
      return response.json()
    })
    yield put(setMovies(movies))
  } catch (e) {
    yield put(fetchFailed(e))
    return
  }
}

function* fetchFavorites(user_id) {
  try {
    const favorites = yield call(async () => {
      const response = await fetch(`${db_path}/users/${user_id}/favorites`)
      return response.json()
    })
    yield put(setFavorites(favorites))
  } catch (e) {
    alert(e)
    // yield put(favoritesFetchFailed())
    return
  }
}

function* attemptLogin(user) {
  try {
    const response = yield call(async () => {
      const response = await fetch(db_path + '/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return response.json()
    })
    yield put(loginSuccess(response))
    yield put(getFavorites(response.data.id))
  } catch (e) {
    yield put(loginFailed())
    return
  }
}

function* attemptRegister(user) {
  try {
    const response = yield call(async () => {
      const response = await fetch(db_path + '/users/new', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return response.json()
    })
    yield put(registerSuccess(response))
  } catch (e) {
    yield put(registerFailed())
    return
  }
}

function* addFavorite(data) {
  try {
    yield call(async () => {
      await fetch(db_path + '/users/favorites/new', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    })
  } catch (e) {
    alert(e)
    return
  }
}

function* removeFavorite(data) {
  try {
    yield call(async () => {
      await fetch(
        `${db_path}/users/${data.user_id}/favorites/${data.movie_id}`,
        { method: 'delete' }
      ).then(response => response.json())
    })
  } catch (e) {
    alert(e)
    return
  }
}

export default function* mySaga() {
  yield takeLatest('MOVIES/FETCH', fetchMovies)
  yield takeLatest('LOGIN/ATTEMPT', action => attemptLogin(action.user))
  yield takeLatest('REGISTER/ATTEMPT', action => attemptRegister(action.user))
  yield takeLatest('FAVORITE/ADD', action => addFavorite(action.data))
  yield takeLatest('FAVORITE/REMOVE', action => removeFavorite(action.data))
  yield takeLatest('FAVORITES/GET', action => fetchFavorites(action.user_id))
}
