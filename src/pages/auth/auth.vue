<template lang="pug">
    div
        vue-form(:state="formState", v-model="formState")
        button(@click="login()") Login
</template>

<script src="./auth.js"></script>

<style lang="stylus" scoped></style>