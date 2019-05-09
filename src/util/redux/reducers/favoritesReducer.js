export default (state = {}, action) => {
  switch (action.type) {
    case 'FAVORITES/SET':
      return action.favorites
    default:
      return state
  }
}
