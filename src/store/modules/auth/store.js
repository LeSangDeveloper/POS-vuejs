/* eslint-disable */
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    state: {
      user: {},
      allUser: {},
      token: localStorage.getItem('token') || null,
      errorLogin: ''
    },
    getters,
    mutations,
    actions
}