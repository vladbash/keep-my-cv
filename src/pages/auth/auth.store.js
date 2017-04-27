import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import rx from 'rxjs';
import { API_ROUTES } from '../../config/api.routes';

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const SIGNUP = "SIGNUP";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const REMIND = "REMIND";
const REMIND_SUCCESS = "REMIND_SUCCESS";

let authStore = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        pending: false
    },
    mutations: {
        [LOGIN](state) {
            state.pending = true;
        },
        [SIGNUP](state) {
            state.pending = true;
        },
        [REMIND](state) {
            state.pending = true;
        },
        [LOGIN_SUCCESS](state) {
            state.isLoggedIn = true;
            state.pending = false;
        },
        [SIGNUP_SUCCESS](state) {
            state.pending = false;
        },
        [REMIND_SUCCESS](state) {
            state.pending = false;
        },
        [LOGOUT](state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({ commit }, creds) {
            commit(LOGIN); // show spinner
            return rx.Observable.create((observer) => {
                Vue.axios.post(API_ROUTES.host + API_ROUTES.auth.login, creds)
                    .then(data => {
                        if (data.data.token) {
                            localStorage.setItem('token', data.data.token);
                            Vue.axios.defaults.headers.common['Authorization'] = data.data.token;
                            commit(LOGIN_SUCCESS);
                        }
                        observer.next(data);
                        observer.complete();
                    })
                    .catch(error => {
                        observer.error(error.response);
                    });
            });
        },
        signup({ commit }, userData) {
            commit(SIGNUP);
            return rx.Observable.create(observer => {
                Vue.axios.post(API_ROUTES.host + API_ROUTES.auth.signUp, userData)
                    .then(data => {
                        commit(SIGNUP_SUCCESS);
                        observer.next(data);
                        observer.complete();
                    })
                    .catch(error => {
                        observer.error(error.response);
                    })
            })
        },
        remind({ commit }, email) {
            commit(REMIND);
            return rx.Observable.create(observer => {
                Vue.axios.post(API_ROUTES.host + API_ROUTES.auth.remind, email)
                    .then(data => {
                        commit(REMIND_SUCCESS);
                        observer.next(data);
                        observer.complete();
                    })
                    .catch(error => {
                        observer.error(error.response);
                    })
            })
        },
        logout({ commit }) {
            return rx.Observable.create(observer => {
                localStorage.removeItem("token");
                commit(LOGOUT);
                delete Vue.axios.defaults.headers.common['Authorization'];
                observer.next();
                observer.complete();
            });
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn;
        }
    }
});

export default authStore;