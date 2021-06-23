<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app/main/analytics"><span class="primary-word">Mairie</span> Commune</router-link>
      </header>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Mes Services"
            link="/app/services"
            iconName="flaticon-briefcase"
            index="services"
            :childrenLinks="children"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Mes Documents"
            link="/app/documents"
            iconName="flaticon-document"
            index="documents"
            labelColor="info"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Mes Procedures"
            link="/app/procedures"
            iconName="flaticon-archive-2"
            index="procedures"
            labelColor="info"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Votre Mairie"
            link="/app/votre-mairie"
            iconName="flaticon-home-2"
            index="votre-mairie"
            labelColor="info"
            isHeader
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
      children: [
        {
          header: 'Etat Civil',
          index: 'etat-civil',
          link: '/app/services/etat-civil',
          childrenLink: '/app/services/etat-civil',
        },
        {
          header: 'Urbanisme',
          index: 'urbanisme',
          link: '/app/services/urbanisme',
          childrenLink: '/app/services/urbanisme',
        },
        {
          header: 'Prendre Rendez-Vous',
          index: 'rendez-vous',
          link: '/app/services/rendez-vous',
          childrenLink: '/app/services/rendez-vous',
        },
      ]
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
