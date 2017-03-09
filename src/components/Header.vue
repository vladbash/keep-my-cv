<template lang="pug">
    .header
        ul
            li
                a Lorem
            li 
                a Ipsum
</template>

<script>
    export default {
        name: 'kmc-header'
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/constants.styl'
    .header
        box-shadow: 0 1px 8px 0 rgba(0,0,0,0.2)
        transition: 0.3s
        width: calc(100% - $sidebar__width)
        height: 54px
        padding-left: $sidebar__width
        background-color: white
    ul
        list-style-type: none
        margin: 0
        padding: 0
        overflow: hidden
    li
      float: left
      > a
            display: block
            text-aligin: center
            padding: 14px 16px
            text-decoration: none  
</style>