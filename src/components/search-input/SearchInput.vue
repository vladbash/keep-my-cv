<template lang="pug">
    .search-block
        md-icon.search-icon search
        input#search-input(placeholder="Search anything you want")
</template>

<script src="./SearchInput.js"></script>

<style lang="stylus" scoped>  
    @import '../../styles/constants.styl'

    .search-block
        display: block
        margin-left: $sidebar__width
        width: 56%
        height: 40px
        margin-top: 6px
        border: solid 1px $color2
        border-radius: 20px
        .search-icon
            margin-left: 2%
            cursor: pointer
            color: $color2
        #search-input
            width: 86%
            height: 100%
            border: none
            margin-left: 3%
            &:focus
                outline: 0
        /*&:focus
            border-color: #66afe9
            outline: 0
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)*/
</style>