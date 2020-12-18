/* eslint-disable */
export default {
  isLogin(state) {
    return state.token !== null
  },
  getError(state) {
    return state.errorLogin
  },
  getUser(state) {
    return state.user
  },
  getAllUser(state) {
    return state.allUser
  },
  getRowsUser(state) {
    return state.allUser.length
  }
}
  