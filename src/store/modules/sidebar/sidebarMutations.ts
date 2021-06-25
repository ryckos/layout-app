
import isScreen from '@/core/screenHelper';

export default {
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
      changeSidebarActive(state: any, index: any) {
        state.sidebarActiveElement = index;
      },
      updateSidebarColor(state: any, payload: any) {
        state.sidebarColorName = payload.color[0];
      },
}