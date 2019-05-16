export default (state = { data: [] }, action) => {
  switch (action.type) {
    case 'FAVORITES/SET':
      return action.favorites
    case 'FAVORITE/ADD':
      return { ...state, data: [...state.data, action.data] }
    case 'FAVORITE/REMOVE':
      return {
        ...state,
        data: [
          ...state.data.filter(fav => fav.movie_id !== action.data.movie_id),
        ],
      }
    default:
      return state
  }
}
