// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App';
import router from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});