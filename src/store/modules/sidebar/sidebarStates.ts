import config from '../../../config';

export const SidebarTypes = {
    SOLID: "solid",
    TRANSPARENT: "transparent",
};

Object.freeze(SidebarTypes);

export default {
    sidebarClose: false,
    sidebarStatic: false,
    sidebarColorName: config.app.themeColors[0][0],
    sidebarType: SidebarTypes.SOLID,
    sidebarActiveElement: null,
}