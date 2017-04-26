<template lang="pug">
    .sidebar
        ul.menu
            li
                router-link(:to="logoLink")
                    img(src='../../assets/logo.svg')
            sidebar-item(
                v-for="item in sidebarItems",
                :key="item",
                :link="item.link",
                :icon="item.icon", 
                :color="item.color", 
                :tooltip="item.tooltip")
</template>
    
<script>
    import SidebarItem from './SidebarItem';

    export default {
        name: 'app-sidebar',
        props: [
            'sidebarItems',
            'logoLink'
            ],
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
            padding: 10px 15px
            &:nth-child(2)
                margin-top: 50px
            &:not(:first-child)
                margin-bottom: 30px
                transition: all .3s ease;
            &:nth-child(1)
                padding-top: 0
                &:hover
                    box-shadow: none
                router-link
                    img
                        width: 72px
                        margin: -30px
</style>