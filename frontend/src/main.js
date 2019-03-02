import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Store from './store/index'

// component import 
import User from './components/User.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes=[
  {path:'/username/:id', component : User },
]

const router = new VueRouter({
  mode: 'history',
  routes:routes
})

new Vue({
  router,
  store:Store,
  render: h => h(App)
}).$mount('#app')
