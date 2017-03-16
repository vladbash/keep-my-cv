<template lang="pug">
    .sidebar
        ul.menu
            li
                a
                    img(src='../assets/logo.svg')
            li.color1
                a
                    i.fa.fa-address-book-o.fa-2x(aria-hidden="true")
            li.color2
                a
                    i.fa.fa-paper-plane-o.fa-2x(aria-hidden="true")
            li.color3
                a
                    i.fa.fa-envelope-o.fa-2x(aria-hidden="true")
</template>
    
<script>
    export default {
        name: 'app-sidebar'
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/constants.styl'
    color-mixin(name)
        color: name
        border-left: 5px outset transparent
        &:hover
            border-left: 5px outset name
            border-radius: 1px
    .color1
        color-mixin($color3)
    .color2
        color-mixin($color8)
    .color3
        color-mixin($color4)
    .sidebar
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
            padding: 10px 25px
            &:nth-child(2)
                margin-top: 50px
            &:not(:first-child)
                margin-bottom: 30px
                transition: all .3s ease;
            &:nth-child(1)
                padding-top: 0
                &:hover
                    box-shadow: none
                a
                    img
                        width: 72px
                        margin: -30px
</style>