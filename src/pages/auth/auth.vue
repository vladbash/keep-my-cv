<template lang="pug">
    .main-block(v-bind:style="{ backgroundImage: background }")
        .container
            md-card.central-block.card-customization
                div
                    img(src='../../assets/logo.svg').central-block
                md-card-content
                        app-login(v-if="!signUpFlag")
                        app-signup(v-if="signUpFlag")
                        .d-flex(:class="{'justify-content-between': !signUpFlag, 'justify-content-end': signUpFlag}")
                            md-button.md-dense(v-if="!signUpFlag") Fogot password?
                            md-button.md-dense(@click.native="signUpFlag = !signUpFlag") {{ !signUpFlag ? 'Sign up' : 'Log in' }}
            
            .footer
                span &copy; ReqrUtka CRM, Created at {{ currentYear }}
</template>

<script src="./auth.js"></script>

<style lang="stylus" scoped>
    .footer
        position: fixed
        right: 0
        bottom: 0
        left: 0
        padding: 1rem
        text-align: center
    
    .main-block
        display: table
        height: 100vh
        width: 100%
        margin: 0
        padding: 0
    
    .central-block
        display: block
        margin: auto

    .card-customization
        width: 50%
        margin-top: 3%
        opacity: 0.9
    
    .required-field
        label::after
            content: '*'
            color: red
            margin-left: 0.25rem
    
    .fade-enter-active, .fade-leave-active
        transition: opacity .5s

    .fade-enter, .fade-leave-to
        opacity: 0
</style>