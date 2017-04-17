import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import rx from 'rxjs';
import { API_ROUTES } from '../../config/api.routes';

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

let authStore = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations: {
        [LOGIN](state) {
            state.pending = true;
        },
        [LOGIN_SUCCESS](state) {
            state.isLoggedIn = true;
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
                        console.log(data);
                        observer.next(data);
                        commit(LOGIN_SUCCESS);
                    })
                    .catch(error => {
                        console.log(error);
                        observer.error(error);
                    })
            });
            return new Promise(resolve => {
                setTimeout(() => {
                    localStorage.setItem("token", "JWT");
                    commit(LOGIN_SUCCESS);
                    resolve();
                }, 1000);
            });
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit(LOGOUT);
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn;
        }
    }
});

export default authStore;