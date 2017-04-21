// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VueMaterial from 'vue-material';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import 'font-awesome/css/font-awesome.min.css';
import AsyncComputed from 'vue-async-computed';
import VueForm from 'vue-form';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueMaterial);
Vue.use(AsyncComputed);
Vue.use(VueForm, {
  inputClasses: {
    invalid: 'has-danger',
    valid: 'has-success'
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app');