<template lang="pug">
  #app
    kmc-header
    .container
      router-view
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    'kmc-header': Header
  }
}
</script>

<style lang="stylus">
@import './styles/main.styl'
</style>
