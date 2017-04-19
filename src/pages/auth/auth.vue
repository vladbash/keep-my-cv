<template lang="pug">
    .main-block(v-bind:style="{ backgroundImage: background }")
        .container
            md-card.central-block.card-customization
                div
                    img(src='../../assets/logo.svg').central-block
                md-card-content
                    vue-form(:state="loginFormState", @submit.prevent="onSubmit", v-if="!signUpFlag", v-transition)
                        validate.form-group.required-field(auto-label)
                            input.form-control(type='email', name='login', placeholder="Email", required, v-model='loginModel.login')
                            field-messages.form-control-feedback(name='login', show='$touched || $submitted')
                                div(slot='required') Login is a required
                        validate.form-group.required-field(auto-label)
                            input.form-control(type='password', name='password', placeholder="Password", required, v-model='loginModel.password')
                            field-messages.form-control-feedback(name='password', show='$touched || $submitted')
                                div(slot='required') Password is a required
                        .d-flex.justify-content-between
                            md-button.md-raised(@click.native="login()") Log in
                            md-button.md-dense Fogot password?
                            md-button.md-dense(@click.native="signUpFlag = true") Sign up
                    vue-form(:state="signupFormState", @submit.prevent="onSubmit", v-if="signUpFlag", v-transition)
                        validate.form-group.required-field.row(auto-label)
                            .col-md-6
                                input.form-control(type='email', name='email', placeholder="Login", required, v-model='signupModel.login')
                                field-messages.form-control-feedback(name='email', show='$touched || $submitted')
                                    div(slot='required') Email is a required
                            .col-md-6
                                input.form-control(type='text', name='company', placeholder="Company name", v-model='signupModel.company')
                                field-messages.form-control-feedback(name='company', show='$touched || $submitted')
                                    div(slot='required') Company is a required
                        validate.form-group.required-field.row(auto-label)
                            .col-md-6
                                input.form-control(type='text', name='name', placeholder="Name", required, v-model='signupModel.name')
                                field-messages.form-control-feedback(name='name', show='$touched || $submitted')
                                    div(slot='required') Name is a required
                            .col-md-6
                                input.form-control(type='text', name='surname', placeholder="Surname", required, v-model='signupModel.surname')
                                field-messages.form-control-feedback(name='surname', show='$touched || $submitted')
                                    div(slot='required') Surname is a required
                        validate.form-group.required-field.row(auto-label)
                            .col-md-6
                                input.form-control(type='password', name='password', placeholder="Password", required, v-model='signupModel.password')
                                field-messages.form-control-feedback(name='password', show='$touched || $submitted')
                                    div(slot='required') Password is a required
                            .col-md-6
                                input.form-control(type='password', name='repeatedPassword', placeholder="Repeated password", required, v-model='signupModel.repeatedPassword')
                                field-messages.form-control-feedback(name='password', show='$touched || $submitted')
                                    div(slot='required') Password is a required
                        .d-flex.justify-content-between
                            md-button.md-raised(@click.native="signUp()") Sign up
                            md-button.md-dense(@click.native="signUpFlag = false") Log in
            
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