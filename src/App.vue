<template lang="pug">
  #app
    .auth-app(v-if="isLoggedIn")
      app-header(:menu-items="menuItems", :profile="profile", :profile-link="profileLink")
      app-sidebar(:sidebar-items="sidebarItems", :logo-link="logoLink")
      .container
        router-view
    .non-auth-app(v-else)
      router-view
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import authStore from './pages/auth/auth.store';
import profileStore from './pages/profile/profile.store';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar
  },
  store: {
    authStore,
    profileStore
  },
  data() {
    return {
      profileLink: 'profile',
      menuItems: [
        {
          icon: 'account_circle',
          label: 'Profile',
          action: () => {
            this.$router.push('profile');
          }
        },
        {
          icon: 'exit_to_app',
          label: 'Fly away',
          action: () => {
            this.$store.authStore.dispatch('logout')
                .then(data => {
                    data.subscribe(() => {
                        this.$router.push('login');
                    });
                });
          }
        }
      ],
      sidebarItems: [
        {
          icon: 'fa-address-book-o',
          color: '#fd5c70',
          tooltip: 'Candidates',
          link: '/candidates'
        },
        {
          icon: 'fa-paper-plane-o',
          color: '#fd63a3',
          tooltip: 'Vacancies',
          link: '/vacancies'
        },
        {
          icon: 'fa-envelope-o',
          color: '#646ddf',
          tooltip: 'Messages',
          link: '/dashboard'
        }
      ],
      logoLink: '/dashboard'
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.authStore.getters.isLoggedIn;
    },
    profile() {
      return this.$store.profileStore.getters.profile;
    }
  },
  created () {
      this.$store.profileStore.dispatch('get')
        .then(data => {
          data.subscribe();
        });
  }
}
</script>

<style lang="stylus">
@import './styles/main.styl'
</style>
