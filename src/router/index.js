import Vue from 'vue';
import Router from 'vue-router';
import authStore from '../pages/auth/auth.store';
const Login = resolve => require(['@/pages/auth/auth.vue'], resolve);
const Dashboard = resolve => require(['@/pages/dashboard/Dashboard.vue'], resolve);
const Profile = resolve => require(['@/pages/profile/Profile.vue'], resolve);

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/dashboard',
      alias: '/',
      component: Dashboard,
      meta: {
        auth: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        auth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.meta.auth === authStore.getters.isLoggedIn) {
    next();
  } else {
    next({ path: authStore.getters.isLoggedIn ? '/' : '/login' });
  }
});
export default router;