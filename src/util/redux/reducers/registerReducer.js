export default (state = { success: null }, action) => {
  switch (action.type) {
    case 'REGISTER/FAILED':
      return { success: false }
    case 'REGISTER/SUCCESS':
      return { success: true, ...action.user }
    default:
      return state
  }
}
