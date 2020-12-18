/* eslint-disable */
export default {
    setUser(state, payload) {
        state.user = payload
        state.token = payload.token
      },
      setAllUser(state, payload) {
        state.allUser = payload
        state.allUser.map(value => {
          value.user_created_at = value.user_created_at.slice(0, 10)
          value.user_updated_at = value.user_updated_at.slice(0, 10)
        })
      },
      clearUser(state) {
        state.user = {}
      },
      setError(state, payload) {
        state.errorLogin = payload
      },
      delUser(state) {
        state.user = {}
        state.token = null
      }
}