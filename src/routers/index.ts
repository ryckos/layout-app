import Vue from 'vue';
import Router from 'vue-router';


import Layout from '../components/Layout/Layout.vue'


//import { isAuthenticated } from './mixins/auth';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/app/dashboard'},
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name:'DashboardPage',
        }
      ],
    },
  ],
});
