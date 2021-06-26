import Vue from 'vue';
import Vuex from 'vuex';
import layout from './layout';

//import modules from './modules'

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    layout,
  },
  //modules,
});