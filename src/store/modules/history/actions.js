/* eslint-disable */
export default {
    getIncome(context, payload) {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/history/income?date=${payload}`)
          .then(response => {
            if (payload === new Date().toJSON().slice(0, 10)) {
              context.commit('setTodayIncome', response.data.data)
            } else if (
              payload === new Date(Date.now() - 864e5).toJSON().slice(0, 10)
            ) {
              context.commit('setPrevIncome', response.data.data)
            }
          })
          .catch(error => {
            console.log(error.response)
          })
      },
      getCountHistoryWeek(context, payload) {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/history/count?date=${payload}`)
          .then(response => {
            if (payload === new Date().toJSON().slice(0, 10)) {
              context.commit('setCountThisWeek', response.data.data)
            } else if (
              payload ===
              new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate() - 7
              )
                .toJSON()
                .slice(0, 10)
            ) {
              context.commit('setCountPrevWeek', response.data.data)
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
      getYearIncome(context, payload) {
        axios
          .get(
            `${process.env.VUE_APP_BASE_URL}/history/incomeyear?date=${payload}`
          )
          .then(response => {
            if (payload === new Date().toJSON().slice(0, 10)) {
              context.commit('setYearIncome', response.data.data)
            } else if (
              payload ===
              new Date(
                new Date().getFullYear() - 1,
                new Date().getMonth(),
                new Date().getDate()
              )
                .toJSON()
                .slice(0, 10)
            ) {
              context.commit('setPrevYearIncome', response.data.data)
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
      getChartData(context, payload) {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/history/chart?date=${payload}`)
          .then(response => {
            context.commit('setChartData', response.data.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      getRecent(context, payload) {
        context.commit('clearRecent')
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/history/${payload}`)
          .then(response => {
            context.commit('setRecent', response.data.data)
            if (payload === 'today') {
              context.commit('setGroup', 'Today')
            } else if (payload === 'week') {
              context.commit('setGroup', 'This Week')
            } else if (payload === 'month') {
              context.commit('setGroup', 'This Month')
            }
          })
          .catch(error => {
            console.log(error.response)
          })
      }
}