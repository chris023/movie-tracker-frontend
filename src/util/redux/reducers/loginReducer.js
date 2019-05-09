export default (state = { success: null }, action) => {
  switch (action.type) {
    case 'LOGIN/FAILED':
      return { success: false }
    case 'LOGIN/SUCCESS':
      return { success: true, ...action.user }
    default:
      return state
  }
}
