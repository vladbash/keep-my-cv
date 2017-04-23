<template lang="pug">
form(@submit.prevent="logIn")
    div(v-if="invalidCreds")
        span.md-error Incorrect login or password
    md-input-container(:class="{'md-input-invalid': errors.has('login')}")
        label Email
        md-input(type="email", name="login", v-model="login", v-validate="'required|email'")
        span.md-error {{errors.first('login')}}
    md-input-container(:class="{'md-input-invalid': errors.has('password')}")
        label Password
        md-input(type="password", name="password", v-model="password", v-validate="'required'")
        span.md-error {{errors.first('password')}}
    .submit-block
        md-button.md-raised.md-primary.submit(type="submit") Log in
</template>

<script>
    import { Validator } from 'vee-validate';
    import store from './auth.store';

    export default {
        name: 'login',
        data: () => ({
            login: '',
            password: '',
            errors: null,
            invalidCreds: false
        }),
        store,
        watch: {
            login(value) {
                this.validator.validate('login', value);
            },
            password(value) {
                this.validator.validate('password', value);
            }
        },
        methods: {
            logIn() {
                this.$validator.validateAll().then(() => {
                    this.$store.dispatch("login", {
                        login: this.login,
                        password: this.password
                    }).then(data => {
                        data.subscribe(res => {
                            this.invalidCreds = false;
                            console.log(res);
                        }, err => {
                            this.invalidCreds = true;
                        })
                    });
                }).catch((res) => {
                    console.log(res, this.validator.errorBag);
                });
                
            },
        },
        created() {
            this.validator = new Validator({
                login: 'required|email',
                password: 'required'
            });
            this.$set(this, 'errors', this.validator.errorBag);
        }
    }
</script>

<style lang="stylus" scoped>

</style>