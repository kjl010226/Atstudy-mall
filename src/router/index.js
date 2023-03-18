import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Index from '@/components/Index.vue'
import SpuList from '@/components/SpuList.vue'
import SpuInfo from '@/components/SpuInfo.vue'
import Regist from '@/components/Regist.vue'
import Login from '@/components/Login.vue'
import AddressList from '@/components/AddressList.vue'
import Error from '@/components/Error.vue'
import Cart from '@/components/Cart.vue'
import Pay from '@/components/Pay.vue'
import Test from '@/components/Test.vue'
import OrderList from '@/components/OrderList.vue'

const routes = [{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/spuList',
		name: 'SpuList',
		component: SpuList
	},
	{
		path: '/spuInfo',
		name: 'SpuInfo',
		component: SpuInfo
	},
	{
		path: '/regist',
		name: 'Regist',
		component: Regist
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/address',
		name: 'AddressList',
		component: AddressList
	},
	{
		path: '/error',
		name: 'Error',
		component: Error
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart
	},
	{
		path: '/pay',
		name: 'Pay',
		component: Pay
	},
	{
		path: '/test',
		name: 'Test',
		component: Test
	},
	{
		path: '/order_list',
		name: 'OrderList',
		component: OrderList
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
