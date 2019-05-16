export default (state = { size: 2 }, action) => {
  switch (action.type) {
    case 'POSTER/SETSIZE':
      return { size: action.size }
    default:
      return state
  }
}
