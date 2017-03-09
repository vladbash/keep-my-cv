<template lang="pug">
  #app
    kmc-header
    app-sidebar
    .container
      router-view
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default {
  name: 'app',
  components: {
    'kmc-header': Header,
    'app-sidebar': Sidebar
  }
}
</script>

<style lang="stylus">
@import './styles/main.styl'
</style>
