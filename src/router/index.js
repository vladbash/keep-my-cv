import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const New = resolve => require(['@/components/New.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/new',
      component: New
    }
  ]
})
