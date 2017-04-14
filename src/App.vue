<template lang="pug">
  #app
    app-header
    app-sidebar
    .container
      router-view
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar
  },
  data() {
    return {
    };
  }
}
</script>

<style lang="stylus">
@import './styles/main.styl'
</style>
