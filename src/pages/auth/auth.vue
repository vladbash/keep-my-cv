<template lang="pug">
    div
        div
            img(src='../../assets/logo.svg').central-block
        md-card.central-block.card-customization
            md-card-content
                vue-form(:state="formState", @submit.prevent="onSubmit")
                    validate.form-group.required-field(auto-label)
                        label Login
                        input.form-control(type='text', name='login', required, v-model='model.login')
                        field-messages.form-control-feedback(name='login', show='$touched || $submitted')
                            div(slot='required') Login is a required
                    validate.form-group.required-field(auto-label)
                        label Password
                        input.form-control(type='password', name='password', required, v-model='model.password')
                        field-messages.form-control-feedback(name='password', show='$touched || $submitted')
                            div(slot='required') Password is a required
                .d-flex.justify-content-between
                    md-button.md-raised(@click="login()") Login
                    md-button.md-dense Fogot password?
                    md-button.md-dense Sign up
</template>

<script src="./auth.js"></script>

<style lang="stylus" scoped>
    .central-block
        display: block
        margin: auto

    .card-customization
        width: 50%
        margin-top: 3%
    
    .required-field
        label::after
            content: '*'
            color: red
            margin-left: 0.25rem
</style>