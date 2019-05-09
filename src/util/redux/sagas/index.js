import { fetchFailed, setMovies } from '../actions'
import tmdbApiKey from '../../apiKeys/TheMovieDB'

import { takeLatest, put, call } from 'redux-saga/effects'

function* fetchMovies() {
  try {
    const movies = yield call(async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=' + tmdbApiKey
      )
      const data = response.json()
      return data
    })
    yield put(setMovies(movies))
  } catch (e) {
    alert(e)
    yield put(fetchFailed(e))
    return
  }
}

export default function* mySaga() {
  yield takeLatest('MOVIES/FETCH', fetchMovies)
}
