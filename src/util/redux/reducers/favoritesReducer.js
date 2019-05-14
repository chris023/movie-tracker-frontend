export default (state = { data: [] }, action) => {
  switch (action.type) {
    case 'FAVORITES/SET':
      return action.favorites
    default:
      return state
  }
}
