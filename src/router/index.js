import Vue from 'vue';
import Router from 'vue-router';
const Login = resolve => require(['@/pages/auth/auth.vue'], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    }
  ]
});