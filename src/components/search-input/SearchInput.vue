<template lang="pug">
    .search-block(v-bind:class="{ focused: focused }")
        md-icon.search-icon search
        input#search-input(placeholder="Search anything you want", v-focus="focused", @focus="focused = true", @blur="focused = false")
</template>

<script src="./SearchInput.js"></script>

<style lang="stylus" scoped>  
    @import '../../styles/constants.styl'

    .search-block
        display block
        margin-left: $sidebar__width
        width 85%
        height 40px
        margin-top 6px
        border: solid 1px $color2
        border-radius 20px
        .search-icon
            margin-left 2%
            cursor pointer
            color: $color2
        #search-input
            width 86%
            height 100%
            border none
            margin-left 3%
            &:focus
                outline 0
    .focused
        box-shadow 0 0 5px rgba(81, 203, 238, 1)
        border 1px solid rgba(81, 203, 238, 1)
</style>