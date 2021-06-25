import config from '@/config';


export const NavbarTypes = {
    STATIC: "static",
    FLOATING: "floating",
};

export const NavbarColorSchemes = {
LIGHT: "light",
DARK: "dark",
};

Object.freeze(NavbarTypes);
Object.freeze(NavbarColorSchemes);

export default{
    navbarColorName: config.app.themeColors[1][0],
    navbarColorScheme: NavbarColorSchemes.LIGHT,
    navbarType: NavbarTypes.STATIC,
    helperOpened: false,
}