import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

import Travel from './pages/Travel.vue'
import Work from './pages/Work.vue'
import About from './pages/About.vue'

const routes = [
	{ path: '/travel', component: Travel },
	{ path: '/work', component: Work },
	{ path: '/about', component: About }
]

const router = new VueRouter({
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
