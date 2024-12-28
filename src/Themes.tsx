export function toggleTheme() {
    const isLightMode = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
}

// Apply the theme on initial load
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}