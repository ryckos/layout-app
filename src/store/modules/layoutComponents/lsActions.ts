

export const LayoutComponents = {
    NAVBAR: "navbar",
    SIDEBAR: "sidebar",
};

Object.freeze(LayoutComponents);

export default {
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
}