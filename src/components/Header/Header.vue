<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <b-navbar class="app-header d-print-none" :class="[navbarTypeClass, 'header-' + navbarColorScheme]">
    <b-nav>
      <b-nav-item>
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod">
          <i class='la la-bars la-lg' />
        </a>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class="la la-bars la-lg" />
        </a>
      </b-nav-item>
    </b-nav>
    <a  class="navbarBrand d-md-none">
      <i class="fa fa-circle text-primary mr-n-sm" />
      <i class="fa fa-circle text-danger" />
      &nbsp;
      Mairie Commune
      &nbsp;
      <i class="fa fa-circle text-danger mr-n-sm" />
      <i class="fa fa-circle text-primary" />
    </a>
    <b-nav class="ml-auto">
      <b-form class="d-sm-down-none ml-5" inline>
        <b-form-group>
          <b-input-group class="input-group-no-border">
            <template v-slot:prepend>
              <b-input-group-text><i class="la la-search"/></b-input-group-text>
            </template>
            <b-form-input id="search-input" placeholder="Recherche" />
          </b-input-group>
        </b-form-group>
      </b-form>
      <b-nav-item-dropdown
        class="notificationsMenu d-md-down-none mr-2"
        menu-class="notificationsWrapper py-0 animated animated-fast fadeIn"
        right>
        <template slot="button-content">
          <span class="avatar rounded-circle thumb-sm float-left mr-2">
            <img
                v-if="user.avatar || user.email === 'sedzroderic@gmail.com'"
                class="rounded-circle"
                :src="user.avatar || avatarImage"
                alt="..."
            />
            <span v-else>{{firstUserLetter}}</span>
          </span>
          <span class="small">{{user.name || user.email || 'Philip smith'}}</span>
        </template>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown class="settingsDropdown d-sm-down-none" no-caret right>
        <template slot="button-content">
          <i class="la la-cog px-2" />
        </template>
        <b-dropdown-item><i class="la la-user" /> My Account</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Calendar</b-dropdown-item>
        <b-dropdown-item href="/inbox">
          Inbox &nbsp;&nbsp;<b-badge variant="danger" pill class="animated bounceIn">9</b-badge>
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button>
          <i class="la la-sign-out" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import avatarImage from '@/common/assets/people/a5.jpg';

export default {
  name: 'Header',
  data() {
    return {
      avatarImage,
      user:{
        name: 'Derick',
        email: 'sedzroderic@gmail.com',
        avatar: null,
      }
    }
  },
  computed: {
    ...mapState('sidebar', [
      'sidebarClose',
      'sidebarStatic',
      'navbarType',
      'navbarColorScheme'
    ]),
    firstUserLetter() {
       return (this.user.name || this.user.email || "P")[0].toUpperCase();
    },

    navbarTypeClass: function () {
      return "navbar-" + this.navbarType + "-type"
    }
  },
  methods: {
    ...mapActions('layout', [
      'toggleSidebar',
      'switchSidebar',
      'changeSidebarActive',
    ]),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    }
  }
};
</script>

<style src="./Header.scss" lang="scss"></style>
