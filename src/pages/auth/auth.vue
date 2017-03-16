<template lang="pug">
h1 {{auth}}
</template>

<script>
export default {
    name: 'auth',
    data() {
        return {
            auth: 'Please, log in!'
        }
    }
}
</script>

<style lang="stylus" scoped></style>