const LIGHT_KEY = "theme";
const LIGHT_VALUE = "light-mode";

export function toggleTheme() {
    
    const isLight = document.body.classList.toggle(LIGHT_VALUE);
    
    localStorage.setItem(LIGHT_KEY, isLight ? LIGHT_VALUE : "");

    return isLight;
}

export function isLightMode() {
    return localStorage.getItem(LIGHT_KEY) === LIGHT_VALUE;
}

if (isLightMode()) {
    document.body.classList.add(LIGHT_VALUE);
}