<template lang="pug">
    .sidebar
        ul.menu
            li
                a
                    img(src='../../assets/logo.svg')
            sidebar-item(icon="fa-address-book-o", color="#fd5c70", tooltip="Contacts")
            sidebar-item(icon="fa-paper-plane-o", color="#fd63a3")
            sidebar-item(icon="fa-envelope-o", color="#646ddf")
</template>
    
<script>
    import SidebarItem from './SidebarItem';

    export default {
        name: 'app-sidebar',
        components: {
            'sidebar-item': SidebarItem
        }
    }
</script>

<style lang="stylus" scoped>
    .sidebar
        min-height: 100vh
        background-color: white
        overflow: hidden
        top: 0
        z-index: 2
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2)
        transition: 0.3s
        position: fixed
        width: 90px
    
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