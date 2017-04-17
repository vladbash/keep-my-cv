import store from './auth.store';

export default {
    name: 'auth',
    data() {
        return {
            fromState: {},
            model: {
                login: '',
                password: ''
            }
        }
    },
    store,
    methods: {
        login() {
            this.$store.dispatch("login", {}).then(data => {
                data.subscribe(res => {
                    console.log(res);
                }, err => {
                    console.log(err);
                })
            });
        }
    }
}