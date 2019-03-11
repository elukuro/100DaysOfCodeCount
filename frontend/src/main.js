import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Store from './store/index'

// component import 
import Container from './containers/Container.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes=[
  {path:'/', redirect:'/_100DaysOfCode' },
  {path:'/:id', component : Container },
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
