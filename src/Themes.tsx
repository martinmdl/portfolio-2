export function toggleTheme() {
    
    // Global theme toggle
    const isLightMode = document.body.classList.toggle("light-mode");

    // Button theme toggle
    // document.querySelector('.navbar-theme-light')?.classList.toggle("light-mode");

    // Save the theme preference
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
}

// Apply the theme on initial load
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}