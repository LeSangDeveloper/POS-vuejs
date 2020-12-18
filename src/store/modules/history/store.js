/* eslint-disable */
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    state: {
      todayIncome: null,
      prevIncome: null,
      countThisWeek: null,
      countPrevWeek: null,
      yearIncome: null,
      prevYearIncome: null,
      chartData: [],
      recentOrder: [],
      recentGroup: 'Today'
    },
    getters,
    mutations,
    actions
}