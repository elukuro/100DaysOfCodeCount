import Vue from 'vue'
import Vuex from 'vuex'


import fetch from './fetch'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'fetch':fetch
  }
})