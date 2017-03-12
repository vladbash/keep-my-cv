<template lang="pug">
    .header
        .row
            .col-md-9
                input#search-input()
            .col-md-3.right-side
</template>

<script>
    export default {
        name: 'kmc-header'
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/constants.styl'
    .right-side
        border-left: solid 1px $color2
        height: 54px
    .header
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2)
        transition: 0.3s
        width: calc(100% - $sidebar__width)
        height: 54px
        padding-left: 60px//$sidebar__width
        overflow: hidden
        background-color: white
        & #search-input
            display: block
            margin-left: $sidebar__width
            width: 56%
            height: 40px
            margin-top: 6px
            border: solid 1px $color2
            border-radius: 20px
            &:focus
                outline: none
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