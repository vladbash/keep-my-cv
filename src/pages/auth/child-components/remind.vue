<template lang="pug">
form(@submit.prevent="remind")
    alert(:error="errorMessage", :success="successMessage")
    md-input-container(:class="{'md-input-invalid': errors.has('email')}")
        label Email
        md-input(type="email", name="email", v-model="email", v-validate="'required|email'", required)
        span.md-error {{errors.first('email')}}
    .submit-block
        md-button.md-raised.md-primary.submit(type="submit") Send me a new password
</template>

<script>
    import { Validator } from 'vee-validate';
    import FormAlert from '../../../components/FormAlert';

    export default {
        name: 'remind',
        components: {
            'alert': FormAlert
        },
        data: () => {
            return {
                email: '',
                errors: null
            }
        },
        watch: {
            email(value) {
                this.validator.validate('email', value);
            }
        },
        props: ['errorMessage', 'successMessage'],
        methods: {
            remind() {
                this.validator.validateAll()
                    .then(data => {
                        this.$emit('remind', this.email);
                    })
                    .catch(errors => {

                    });
            }
        },
        created() {
            this.validator = new Validator({
                email: 'required|email'
            });
            this.$set(this, 'errors', this.validator.errorBag);
        }
    }
</script>

<style lang="stylus">
    
</style>