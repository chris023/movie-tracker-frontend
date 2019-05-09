export default (state = { success: null }, action) => {
  switch (action.type) {
    case 'LOGIN/FAILED':
      return { success: false }
    case 'LOGIN/SUCCESS':
      return { success: true, ...action.user }
    case 'AUTH/LOGOUT':
      return { success: null }
    default:
      return state
  }
}
