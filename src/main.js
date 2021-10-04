import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.devtools = true
Vue.config.productionTip = true
Vue.prototype.$hostname = (Vue.config.productionTip) ? 'https://salty-temple-72490.herokuapp.com' : 'http://localhost:3000'
Vue.use(VueRouter);

import Travel from './pages/Travel.vue'
import Home from './pages/Home.vue'
import TravelLocation from './pages/TravelLocation.vue'
import Work from './pages/Work.vue'
import About from './pages/About.vue'
import WorkArticle from './pages/WorkArticle.vue'
import Books from './pages/Books.vue'
import Admin from './pages/Admin.vue'

const routes = [
	{ path: '/travel', component: Travel,
		children: [
			{
				path: '/travel/:id',
				name: 'travelLocation',
				props: true,
				component: TravelLocation
			}
		]
	},
	{ path: '/work', component: Work },
	{ path: '/admin', component: Admin },
	{ path: '/work/:id', component: WorkArticle },
	{ path: '/', component: Home },
	{ path: '/books', component: Books },
	{ path: '/about', component: About }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
