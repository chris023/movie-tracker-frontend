export default (state = {}, action) => {
  switch (action.type) {
    case 'MOVIES/FETCH_FAILED':
      return {}
    case 'MOVIES/SET':
      return action.movies
    default:
      return state
  }
}
