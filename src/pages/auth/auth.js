import store from './auth.store';

export default {
    name: 'auth',
    data() {
        return {
            formState: {},
            model: {
                login: '',
                password: ''
            }
        }
    },
    store,
    methods: {
        login() {
            this.$store.dispatch("login", this.model).then(data => {
                data.subscribe(res => {
                    console.log(res);
                }, err => {
                    console.log(err);
                })
            });
        },
    }
}