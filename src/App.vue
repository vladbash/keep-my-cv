<template lang="pug">
  #app
    .auth-app(v-if="isLoggedIn")
      app-header
      app-sidebar
      .container
        router-view
    .non-auth-app(v-else)
      .container
        router-view
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import storeAuth from './pages/auth/auth.store';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar
  },
  store: {
    storeAuth
  },
  data() {
    return {
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.storeAuth.getters.isLoggedIn;
    }
  }
}
</script>

<style lang="stylus">
@import './styles/main.styl'
</style>
