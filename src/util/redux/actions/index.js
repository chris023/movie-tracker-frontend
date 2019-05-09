export const fetchFailed = e => ({
  type: 'MOVIES/FETCH_FAILED',
  e,
})

export const setMovies = movies => ({
  type: 'MOVIES/SET',
  movies,
})

export const loginSuccess = user => ({
  type: 'LOGIN/SUCCESS',
  user,
})

export const loginFailed = () => ({
  type: 'LOGIN/FAILED',
})

export const attemptLogin = user => ({
  type: 'LOGIN/ATTEMPT',
  user,
})
