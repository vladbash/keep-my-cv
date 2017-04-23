import { API_ROUTES } from '../../config/api.routes';
import Vue from 'vue';
import Login from './login';
import SignUp from './signup';

export default {
    name: 'auth',
    data() {
        return {
            background: '',
            signUpFlag: false
        }
    },
    components: {
        'app-login': Login,
        'app-signup': SignUp
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