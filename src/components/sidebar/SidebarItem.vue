<template lang="pug">
    li.item(:style="{ color: color, borderLeftColor: color }")
        //md-icon.md-size-2x(:style="{ color: color }", v-bind:md-iconset="'fa ' + icon ")
        i.fa.fa-3x(aria-hidden="true", :class="[icon]", :style="{ color: color }")
        md-tooltip(md-direction="bottom", v-if="tooltip") {{ tooltip }}
</template>

<script>
    export default {
        name: 'app-sidebar-item',
        props: {
            icon: String,
            color: String,
            tooltip: {
                type: String,
                required: false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .item
        border-left-width: 5px
        border-left-style: hidden
        cursor: pointer
        &:hover
            border-radius: 1px
            border-left-style: outset
</style>