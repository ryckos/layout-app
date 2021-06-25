

export default {
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
}