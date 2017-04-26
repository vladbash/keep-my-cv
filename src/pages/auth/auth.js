import { API_ROUTES } from '../../config/api.routes';
import Vue from 'vue';
import Login from './child-components/login';
import SignUp from './child-components/signup';
import RemindPassword from './child-components/remind';
import store from './auth.store';
import { Observer } from 'rxjs';

export default {
    name: 'auth',
    data() {
        return {
            background: '',
            signUpFlag: false,
            remindFlag: false,
            remindError: null,
            remindSuccess: null,
            signupError: null,
            signupSuccess: null,
            loginError: null
        }
    },
    store,
    components: {
        'app-login': Login,
        'app-signup': SignUp,
        'app-remind': RemindPassword
    },
    methods: {
        signup(user) {
            this.$store.dispatch('signup', user)
                .then((data) => {
                    data.subscribe(response => {
                        this.signupSuccess = response.data.message;
                        this.signupError = null;
                    }, error => {
                        this.signupSuccess = null;
                        this.signupError = error.data.error;
                    })
                })
        },
        login(user) {
            this.$store.dispatch("login", user).then(data => {
                    data.subscribe(res => {
                        this.loginError = null;
                        this.$router.push('dashboard');
                    }, err => {
                        this.loginError = err.data.error;
                    });
                });
        },
        remindPassword(email) {
            this.$store.dispatch("remind", { email }).then(data => {
                    data.subscribe(res => {
                        this.remindSuccess = res.data.message;
                        this.remindError = null;
                    }, err => {
                        this.remindSuccess = null;
                        this.remindError = err.data.error;
                    });
                });
        },
        changeForm() {
            this.loginError = null;
            this.signupError = null;
            this.signupSuccess = null;
            this.signUpFlag = !this.signUpFlag;
        },
        goToRemind() {
            this.loginError = null;
            this.remindError = null;
            this.remindSuccess = null;
            this.remindFlag = !this.remindFlag;
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