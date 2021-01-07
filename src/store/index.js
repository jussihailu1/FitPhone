import Vue from 'vue'
import Vuex from 'vuex'
import {Clock} from '../models/Clock'

Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    test: "test",
    clock: new Clock()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
