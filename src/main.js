import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

import Pics from './components/Pics.vue'

const routes = [
	{ path: '/pics', component: Pics }
]

const router = new VueRouter({
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
