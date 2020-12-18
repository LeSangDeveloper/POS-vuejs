/* eslint-disable */
export default {
  getTodayIncome: state => state.todayIncome,
  getPrevIncome: state => state.prevIncome,
  getCountThisWeek: state => state.countThisWeek,
  getCountPrevWeek: state => state.countPrevWeek,
  getThisYearIncome: state => state.yearIncome,
  getPrevYearIncome: state => state.prevYearIncome,
  getChart: state => state.chartData,
  getRecentOrder: state => state.recentOrder,
  getRecentGroup: state => state.recentGroup,
  getRows: state => state.recentOrder.length
}
  