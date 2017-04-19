import store from './auth.store';
import { API_ROUTES } from '../../config/api.routes';
import Vue from 'vue';

export default {
    name: 'auth',
    data() {
        return {
            loginFormState: {},
            signupFormState: {},
            loginModel: {
                login: '',
                password: ''
            },
            signupModel: {
                email: '',
                name: '',
                company: '',
                surname: '',
                password: '',
                repeatedPassword: ''
            },
            background: '',
            signUpFlag: false
        }
    },
    computed: {
        currentYear: () => new Date().getFullYear()
    },
    store,
    methods: {
        login() {
            this.$store.dispatch("login", this.loginModel).then(data => {
                data.subscribe(res => {
                    console.log(res);
                }, err => {
                    console.log(err);
                })
            });
        },
        signUp() {

        }
    },
    created () {
        Vue.axios.get(API_ROUTES.randomImage)
            .then(data => {
                this.background = `url(${data.request.responseURL})`;
            })
    }
}