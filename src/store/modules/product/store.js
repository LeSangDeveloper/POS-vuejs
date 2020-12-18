/* eslint-disable */
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    state: {
        cart: [{
            name: 'Sang'
        }],
        product: [],
        productItem: [],
        page: 1,
        limit: 8,
        sort: 'product_id',
        totalRows: null,
        invoice: ''      
    },
    getters : getters,
    mutations : mutations,
    actions : actions
}