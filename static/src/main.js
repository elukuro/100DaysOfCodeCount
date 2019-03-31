import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Store from './store/index'

// component import 
import Container from './containers/Container.vue'

// buefy component
import Buefy from 'buefy'

//import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)

const routes=[
  {path:'/',component : Container },
  //{path:'/',redirect :'100xcode' },
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

window.setInterval(function () {
  localStorage.removeItem('data')
},1000*10);