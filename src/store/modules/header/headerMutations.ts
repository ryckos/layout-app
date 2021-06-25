import chroma from 'chroma-js';


export const NavbarColorSchemes = {
    LIGHT: "light",
    DARK: "dark",
  };

function updateRootCss(cssVar: any, value: any) {
    //document.querySelector('.root.sing-dashboard').style.setProperty(cssVar, value);
  }

export default {
    updateNavbarColor(state: any, payload: any) {
        const colorName = payload.color[0];
        const colorValue = payload.color[1];
        state.navbarColorName = colorName;
        updateRootCss('--navbar-bg', colorValue);
        state.navbarColorScheme = chroma(colorValue).luminance() < 0.4 ? NavbarColorSchemes.DARK : NavbarColorSchemes.LIGHT;
      },
      toggleHelper(state: any, payload: any) {
        state.helperOpened = payload;
      },
}