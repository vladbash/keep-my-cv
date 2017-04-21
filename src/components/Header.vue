<template lang="pug">
    .header-wrapper
        .header
            .row
                .col-md-8
                    app-search
                .col-md-1.d-flex.justify-content-center.single-icon-block
                    i.fa.fa-2x.fa-ravelry.icon-color.align-middle
                .col-md-3.offset-md-0.right-side.d-flex.justify-content-center
                    .profile-bage
                        md-avatar.md-avatar-icon
                            img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkl2gWjNZ-jRY3IDW2MmPBtjNNA8Em9LyZl_H6Vrimxx5-hE-pdQ")
                        span.personal-name Ducky Ducks Test Test
                    .personal-menu
                        md-menu(md-direction="bottom left")
                            md-icon(md-menu-trigger) expand_more
                            //-arrow_drop_down_circle
                            md-menu-content
                                md-menu-item Ducky's profile
                                md-menu-item(@click.native="logout") Fly away
</template>

<script>
    import AppSearch from './search-input/SearchInput.vue';
    import authStore from '../pages/auth/auth.store';

    export default {
        name: 'kmc-header',
        store: {
            authStore
        },
        components: {
            'app-search': AppSearch
        },
        methods: {
            logout() {
                this.$store.authStore.dispatch('logout')
                .then(data => {
                    data.subscribe(() => {
                        this.router.go('/login');
                    });
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/constants.styl'

    .right-side
        border-left: solid 1px $color2
        height: $header_heigth
    
    .header-wrapper
        position: fixed
        width: 100%
        z-index: 2

    .header
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2)
        transition: 0.3s
        width: calc(100% - $sidebar__width)
        height: $header_heigth
        padding-left: 60px//$sidebar__width
        overflow: hidden
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
    .profile-bage
        display: block
        margin-right: 20px
        margin-top: 5px
        float: left
        cursor: pointer
        .personal-name
            margin-left: 10px

    .personal-menu
        margin-top: 12px
        float: right
        cursor: pointer
    
    .icon-color
        color: #5c6971
        cursor: pointer
    
    .single-icon-block
        top: 10px
        height: 54px
</style>