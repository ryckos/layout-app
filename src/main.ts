import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

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


Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h: any) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
    router,
    store,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
