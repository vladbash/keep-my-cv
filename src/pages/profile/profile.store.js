import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import rx from 'rxjs';
import { API_ROUTES } from '../../config/api.routes';

const UPDATE = "UPDATE";
const UPDATE_SUCCESS = "UPDATE_SUCCESS";
const GET = "GET";
const GET_SUCCESS = "GET_SUCCESS";

let profileStore = new Vuex.Store({
    state: {
        profile: {
            name: null,
            surname: null,
            avatar: null,
            isActivated: false
        },
        pending: false
    },
    mutations: {
        [GET](state) {
            state.pending = true;
        },
        [GET_SUCCESS](state, profile) {
            state.pending = false;
            profile.avatar = `${API_ROUTES.static}${profile.avatar}`;
            Vue.set(state, 'profile', profile);
        },
        [UPDATE](state) {
            state.pending = true;
        },
        [UPDATE_SUCCESS](state, profile) {
            state.pending = false;
            Vue.set(state, 'profile', profile);
        }
    },
    actions: {
        get({ commit }) {
            commit(GET);
            return rx.Observable.create((observer) => {
                Vue.axios.get(API_ROUTES.host + API_ROUTES.profile.get)
                    .then(data => {
                        observer.next(data);
                        commit(GET_SUCCESS, data.data);
                        observer.complete();
                    }, error => {
                        observer.error(error);
                        observer.complete();
                    })
            })

        },
        update({ commit }, updatedProfile) {
            commit(UPDATE);
        }
    },
    getters: {
        profile: state => {
            return state.profile;
        }
    }
});

export default profileStore;