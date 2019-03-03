import Vue from 'vue'
import Vuex from 'vuex'


import fetch from './fetch'
import action from './action'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'fetch':fetch,
    'action':action
  }
})