import {
  fetchFailed,
  loginFailed,
  loginSuccess,
  registerFailed,
  registerSuccess,
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
      const data = response.json()
      return data
    })
    yield put(loginSuccess(response))
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
      const data = response.json()
      return data
    })
    yield put(registerSuccess(response))
  } catch (e) {
    yield put(registerFailed())
    return
  }
}

export default function* mySaga() {
  yield takeLatest('MOVIES/FETCH', fetchMovies)
  yield takeLatest('LOGIN/ATTEMPT', action => attemptLogin(action.user))
  yield takeLatest('REGISTER/ATTEMPT', action => attemptRegister(action.user))
}
