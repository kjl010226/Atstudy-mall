import {
	createStore
} from 'vuex'
import website from './modules/website.js'
import product from './modules/product.js'
import customer from './modules/customer.js'
import order from './modules/order.js'

export default createStore({

	modules: {
		website,
		product,
		customer,
		order
	}
})
