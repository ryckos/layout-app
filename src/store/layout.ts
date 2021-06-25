import isScreen from '@/core/screenHelper';
import config from '../config';
import chroma from 'chroma-js';

export const NavbarTypes = {
  STATIC: "static",
  FLOATING: "floating",
};

export const NavbarColorSchemes = {
  LIGHT: "light",
  DARK: "dark",
};

export const SidebarTypes = {
  SOLID: "solid",
  TRANSPARENT: "transparent",
};

export const LayoutComponents = {
  NAVBAR: "navbar",
  SIDEBAR: "sidebar",
};

Object.freeze(NavbarTypes);
Object.freeze(NavbarColorSchemes);
Object.freeze(SidebarTypes);
Object.freeze(LayoutComponents);

function updateRootCss(cssVar: any, value: any) {
  //document.querySelector('.root.sing-dashboard').style.setProperty(cssVar, value);
}

export default {
  namespaced: true,
  state: {
    sidebarClose: false,
    sidebarStatic: false,
    sidebarColorName: config.app.themeColors[0][0],
    navbarColorName: config.app.themeColors[1][0],
    navbarColorScheme: NavbarColorSchemes.LIGHT,
    navbarType: NavbarTypes.STATIC,
    sidebarType: SidebarTypes.SOLID,
    sidebarActiveElement: null,
    helperOpened: false,
  },
  mutations: {
    toggleSidebar(state: any) {
      const nextState = !state.sidebarStatic;

      localStorage.sidebarStatic = nextState;
      state.sidebarStatic = nextState;

      if (!nextState && (isScreen('lg') || isScreen('xl'))) {
        state.sidebarClose = true;
      }
    },
    switchSidebar(state: any, value:boolean) {
      if (value) {
        state.sidebarClose = value;
      } else {
        state.sidebarClose = !state.sidebarClose;
      }
    },
    handleSwipe(state: any, e: any) {
      if ('ontouchstart' in window) {
        if (e.direction === 4) {
          state.sidebarClose = false;
        }

        if (e.direction === 2 && !state.sidebarClose) {
          state.sidebarClose = true;
        }
      }
    },
    changeSidebarActive(state: any, index: string) {
      state.sidebarActiveElement = index;
    },
    updateLayoutComponentType(state: any, payload: any) {
      state[payload.component + 'Type'] = payload.type;
    },
    updateSidebarColor(state: any, payload: any) {
      state.sidebarColorName = payload.color[0];
    },
    updateNavbarColor(state: any, payload: any) {
      let colorName = payload.color[0];
      let colorValue = payload.color[1];
      state.navbarColorName = colorName;
      updateRootCss('--navbar-bg', colorValue);
      state.navbarColorScheme = chroma(colorValue).luminance() < 0.4 ? NavbarColorSchemes.DARK : NavbarColorSchemes.LIGHT;
    },
    toggleHelper(state: any, payload: any) {
      state.helperOpened = payload;
    },
  },
  actions: {
    toggleSidebar( context: any ) {
      context.commit('toggleSidebar');
    },
    switchSidebar( context: any , value: any) {
      context.commit('switchSidebar', value);
    },
    handleSwipe( context: any, e: any) {
      context.commit('handleSwipe', e);
    },
    changeSidebarActive( context: any , index: any) {
      context.commit('changeSidebarActive', index);
    },
    changeTheme( context: any , theme: any) {
      context.commit('changeTheme', theme);
    },
    updateLayoutComponentType( context: any , payload: any) {
      context.commit('updateLayoutComponentType', payload)
    },
    updateLayoutComponentColor( context: any , payload: any) {
      if (payload.component === LayoutComponents.SIDEBAR) {
        context.commit('updateSidebarColor', payload)
      } else {
        context.commit('updateNavbarColor', payload)
      }
    },
    toggleHelper( context: any , payload: any) {
      context.commit('toggleHelper', payload)
    },
  },
};
