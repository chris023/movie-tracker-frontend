export const fetchFailed = e => ({
  type: 'MOVIES/FETCH_FAILED',
  e,
})

export const setMovies = movies => ({
  type: 'MOVIES/SET',
  movies,
})
