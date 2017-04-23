<template lang="pug">
form(@submit.stop.prevent="submit")
    .alert.alert-danger.alert-material(v-if="invalidCreds", role="alert")
        span.md-error Incorrect login or password
    .row
        .col-md-6
            md-input-container(:class="{'md-input-invalid': errors.has('email')}")
                label Email
                md-input(type="text", name="email", v-model="model.email", v-validate="'required|email'")
                span.md-error {{errors.first('email')}}
        .col-md-6
            md-input-container(:class="{'md-input-invalid': errors.has('company')}")
                label Company
                md-input(type="text", name="company", v-model="model.company", v-validate="'required'")
                span.md-error {{errors.first('company')}}
    .row
        .col-md-6
            md-input-container(:class="{'md-input-invalid': errors.has('name')}")
                label Name
                md-input(type="text", name="name", v-model="model.name", v-validate="'required'")
                span.md-error {{errors.first('email')}}
        .col-md-6
            md-input-container(:class="{'md-input-invalid': errors.has('Surname')}")
                label Surname
                md-input(type="text", name="surname", v-model="model.surname", v-validate="'required'")
                span.md-error {{errors.first('surname')}}
    .row
        .col-md-6
            md-input-container(:class="{'md-input-invalid': errors.has('password')}")
                label Password
                md-input(type="password", name="password", v-model="model.password", v-validate="'required'")
                span.md-error {{errors.first('password')}}
        .col-md-6
            md-input-container(:class="{'md-input-invalid': errors.has('passwordRepeat')}")
                label Repeated password
                md-input(type="password", name="passwordRepeat", v-model="model.repeatedPassword", v-validate="'required'")
                span.md-error {{errors.first('passwordRepeat')}}
</template>

<script>
    import store from './auth.store';

    export default {
        name: 'sign-up',
        data: () => {
            return {
                email: '',
                name: '',
                company: '',
                surname: '',
                password: '',
                repeatedPassword: ''
            };
        },
        store
    }
</script>

<style lang="stylus">
    
</style>