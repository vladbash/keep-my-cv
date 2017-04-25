<template lang="pug">
div
    .alert.alert-danger.alert-material(v-if="error", role="alert")
        span.md-error {{ error }}
    .alert.alert-success.alert-material(v-if="success", role="alert")
        span.md-error {{ success }}
</template>

<script>
    export default {
        name: 'form-alert',
        props: ['error', 'success']
    }
</script>

<style lang="stylus">
    .alert-material
        border-radius: 0
        border: 0
        box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)
</style>