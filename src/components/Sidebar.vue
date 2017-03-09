<template lang="pug">
    .sidebar
        ul.menu
            li 
                a
                    img(src='../assets/logo.svg')
            li 
                a 2
</template>
    
<script>
    export default {
        name: 'app-sidebar'
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/constants.styl'
    .sidebar
        width: $sidebar__width
        min-height: 100vh
        background-color: white
        overflow: hidden
        top: 0
        z-index: 2
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2)
        transition: 0.3s
        position: fixed
    ul.menu
        list-style: none
        text-align: center
        display: inline
        li
            padding: 25px
            height: 25px
            &:nth-child(1)
                top: 0
            &:hover
                box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2)
            a
                img
                    width: 72px
                    margin: -30px
</style>