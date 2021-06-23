import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
//import VueTouch from 'vue-touch';
import axios from 'axios';
import Toasted from 'vue-toasted';
import router from './routers';
import layoutMixin from './mixins/layout';
//import { AuthMixin } from './mixins/auth';
import config from './config';
import Widget from './components/Widget/Widget.vue';
import store from './store'

axios.defaults.baseURL = config.baseURLApi;

Vue.use(BootstrapVue);
//Vue.use(VueTouch);
Vue.component('Widget', Widget);
Vue.mixin(layoutMixin);
//Vue.mixin(AuthMixin);
Vue.use(Toasted, {duration: 10000});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
