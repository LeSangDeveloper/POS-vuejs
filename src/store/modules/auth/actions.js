/* eslint-disable */
export default {
    login(context, payload) {
        return new Promise((resolve, reject) => {
          axios
            .post(`${process.env.VUE_APP_BASE_URL}/users/login`, payload)
            .then(response => {
              context.commit('setUser', response.data.data)
              localStorage.setItem('token', response.data.data.token)
              resolve(response.data)
            })
            .catch(error => {
              reject(error.response)
            })
        })
      },
      userData(context, payload) {
        return new Promise((resolve, reject) => {
          axios
            .get(`${process.env.VUE_APP_BASE_URL}/users/${payload}`)
            .then(response => resolve(response.data))
            .catch(error => reject(error.response))
        })
      },
      allUserData(context) {
        return new Promise((resolve, reject) => {
          axios
            .get(`${process.env.VUE_APP_BASE_URL}/users`)
            .then(response => {
              context.commit('setAllUser', response.data.data)
              resolve(response.data)
            })
            .catch(error => reject(error.response))
        })
      },
      patchUser(context, payload) {
        return new Promise((resolve, reject) => {
          axios
            .patch(
              `${process.env.VUE_APP_BASE_URL}/users/${payload.id}`,
              payload.form
            )
            .then(response => {
              context.commit('clearUser')
              resolve(response.data)
            })
            .catch(error => {
              reject(error.response)
            })
        })
      },
      register(context, payload) {
        return new Promise((resolve, reject) => {
          axios
            .post(`${process.env.VUE_APP_BASE_URL}/users/register`, payload)
            .then(response => {
              resolve(response.data)
            })
            .catch(error => {
              reject(error.response)
            })
        })
      },
      logout(context) {
        localStorage.removeItem('token')
        sessionStorage.clear()
        context.commit('delUser')
        router.push('/login')
      },
      interceptorRequest(context) {
        axios.interceptors.request.use(
          function(config) {
            config.headers.Authorization = `Bearer ${context.state.token}`
            return config
          },
          function(error) {
            return Promise.reject(error)
          }
        )
      },
      interceptorResponse(context) {
        axios.interceptors.response.use(
          function(response) {
            return response
          },
          function(error) {
            context.commit('setError', error.response.data.msg)
            if (error.response.status === 403) {
              if (
                error.response.data.msg === 'invalid token' ||
                error.response.data.msg === 'invalid signature'
              ) {
                localStorage.removeItem('token')
                context.commit('delUser')
                router.push('/login')
                alert(error.response.data.msg)
              } else if (error.response.data.msg === 'jwt expired') {
                return new Promise((resolve, reject) => {
                  const payload = {
                    userId: context.state.user.user_id,
                    refreshToken: context.state.user.refreshToken
                  }
                  axios
                    .post(`${process.env.VUE_APP_BASE_URL}/users/refresh`, payload)
                    .then(response => {
                      console.log(response.data)
                      context.commit('setUser', response.data.data)
                      localStorage.setItem('token', response.data.data.token)
                      resolve(response.data)
                    })
                    .catch(error => {
                      reject(error.response)
                    })
                })
              }
            }
            return Promise.reject(error)
          }
        )
      }
}