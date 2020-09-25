import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(VueRouter);

import Travel from './pages/Travel.vue'
import Home from './pages/Home.vue'
import TravelLocation from './pages/TravelLocation.vue'
import Work from './pages/Work.vue'
import About from './pages/About.vue'
import Article from './pages/Article.vue'
import Blog from './pages/Blog.vue'
import BlogAdmin from './pages/BlogAdmin.vue'

const routes = [
	{ path: '/travel', component: Travel,
		children: [
			{
				path: '/travel/:id',
				component: TravelLocation
			}
		]
	},
	{ path: '/blog', component: Blog,
		children: [
			{
				path: '/blog/admin',
				component: BlogAdmin
			}
		]
	},
	{ path: '/', component: Home },
	{ path: '/work', component: Work },
	{ path: '/about', component: About },
	{ path: '/article/:id', component: Article }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
