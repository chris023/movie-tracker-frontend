export default (state = { success: null, data: {} }, action) => {
  switch (action.type) {
    case 'LOGIN/FAILED':
      return { success: false }
    case 'LOGIN/SUCCESS':
      return { success: true, ...action.user }
    case 'AUTH/LOGOUT':
      return { success: null, data: {} }
    default:
      return state
  }
}
