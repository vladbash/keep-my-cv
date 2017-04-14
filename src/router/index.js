import Vue from 'vue';
import Router from 'vue-router';
const Login = resolve => require(['@/pages/auth/auth.vue'], resolve);

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {
        auth: false
      }
    }
  ]
});

/*router.beforeEach((to, from, next) => {
  console.log(to, from, next)
});*/
export default router;