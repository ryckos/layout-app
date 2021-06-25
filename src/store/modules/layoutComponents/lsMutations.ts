

export default {
    updateLayoutComponentType(state: any, payload: any) {
        state[payload.component + 'Type'] = payload.type;
    },
}