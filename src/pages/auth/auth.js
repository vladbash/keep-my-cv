import { API_ROUTES } from '../../config/api.routes';
import Vue from 'vue';
import Login from './login';
import SignUp from './signup';
import store from './auth.store';
import { Observer } from 'rxjs';

export default {
    name: 'auth',
    data() {
        return {
            background: '',
            signUpFlag: false,
            signupError: null,
            signupSuccess: null,
            loginError: null
        }
    },
    store,
    components: {
        'app-login': Login,
        'app-signup': SignUp
    },
    methods: {
        signup(user) {
            this.$store.dispatch('signup', user)
                .then((data) => {
                    data.subscribe(response => {
                        this.signupSuccess = response.data.message;
                    }, error => {
                        console.log(error);
                        this.signupSuccess = null;
                        this.signupError = error.data.error;
                    })
                })
        },
        login(user) {
            this.$store.dispatch("login", user).then(data => {
                    data.subscribe(res => {
                        this.loginError = null;
                    }, err => {
                        this.loginError = err.data.error;
                    });
                });
        },
        changeForm() {
            this.loginError = null;
            this.signupError = null;
            this.signupSuccess = null;
            this.signUpFlag = !this.signUpFlag;
        }
    },
    computed: {
        currentYear: () => new Date().getFullYear()
    },
    created () {
        Vue.axios.get(API_ROUTES.randomImage)
            .then(data => {
                this.background = `url(${data.request.responseURL})`;
            })
    }
}