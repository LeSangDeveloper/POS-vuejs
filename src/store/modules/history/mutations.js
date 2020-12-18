/* eslint-disable */
export default {
    setTodayIncome(state, payload) {
        state.todayIncome = payload
      },
      setPrevIncome(state, payload) {
        state.prevIncome = payload
      },
      setCountThisWeek(state, payload) {
        state.countThisWeek = payload
      },
      setCountPrevWeek(state, payload) {
        state.countPrevWeek = payload
      },
      setYearIncome(state, payload) {
        state.yearIncome = payload
      },
      setPrevYearIncome(state, payload) {
        state.prevYearIncome = payload
      },
      setChartData(state, payload) {
        for (let i = 0; i < payload.length; i++) {
          state.chartData.push([payload[i].date, payload[i].sum])
        }
      },
      clearChart(state) {
        state.chartData = []
      },
      setRecent(state, payload) {
        payload.map(value => {
          const setItem = {
            INVOICES: `#${value.history_invoice}`,
            CASHIER: value.user_name,
            DATE: value.history_created_at.slice(0, 10),
            ORDERS: value.orders
              .map(item => item.product_name.concat(` ${item.order_qty}x`))
              .join(', '),
            AMOUNT: `Rp. ${value.history_subtotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          }
          state.recentOrder = [...state.recentOrder, setItem]
        })
      },
      clearRecent(state) {
        state.recentOrder = []
      },
      setGroup(state, payload) {
        state.recentGroup = payload
      }
}