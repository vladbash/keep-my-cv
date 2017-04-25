<template lang="pug">
form(@submit.prevent="logIn")
    alert(:error="errorMessage")
    md-input-container(:class="{'md-input-invalid': errors.has('login')}")
        label Email
        md-input(type="email", name="login", v-model="login", v-validate="'required|email'", required)
        span.md-error {{errors.first('login')}}
    md-input-container(:class="{'md-input-invalid': errors.has('password')}")
        label Password
        md-input(type="password", name="password", v-model="password", v-validate="'required'", required)
        span.md-error {{errors.first('password')}}
    .submit-block
        md-button.md-raised.md-primary.submit(type="submit") Log in
</template>

<script>
    import { Validator } from 'vee-validate';
    import FormAlert from '../../../components/FormAlert';

    export default {
        name: 'login',
        components: {
            'alert': FormAlert
        },
        data: () => ({
            login: '',
            password: '',
            errors: null
        }),
        props: ['loginEvent', 'errorMessage'],
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
                this.validator.validateAll().then(() => {
                    this.loginEvent({
                        login: this.login,
                        password: this.password
                    });
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