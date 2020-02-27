import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

import Travel from './pages/Travel.vue'
import TravelLocation from './pages/TravelLocation.vue'
import Work from './pages/Work.vue'
import About from './pages/About.vue'
import Article from './pages/Article.vue'

const routes = [
	{ path: '/travel', component: Travel,
		children: [
			{
				path: '/location/:id',
				component: TravelLocation
			}
		]
	},
	{ path: '/work', component: Work },
	{ path: '/about', component: About },
	{ path: '/article/:id', component: Article }
]

const router = new VueRouter({
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
