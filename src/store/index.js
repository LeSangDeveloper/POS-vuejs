/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth/store'
import Product from './modules/product/store'
import History from './modules/history/store'
import Category from './modules/category/store'
import Partner from './modules/partner/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Product,
    History,
    Category,
    Partner
  }
})