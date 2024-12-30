const LANG_KEY = "language";
const LANG_VALUE = "spanish";

let isSpanish: boolean;
isSpanish = isSpanishMode();

export function toggleLanguage() {
    isSpanish = !isSpanish;
    localStorage.setItem(LANG_KEY, isSpanish ? LANG_VALUE : "");
    return isSpanish;
}

export function isSpanishMode() {
    return localStorage.getItem(LANG_KEY) === LANG_VALUE;
}

export function getLanguage() {
    if (isSpanishMode()) {
        return translator.spanishText;
    } else {
        return translator.englishText;
    }
}

const translator = {

    englishText: {
        navbar: {
            work: "Work",
            education: "Education",
            resume: "Resume",
        },
        workCards: [
            {
                title: "Amazon Trends",
                description: "API for analizing trending products in Amazon.",
                image: "webScraper.png",
            },
            {
                title: "Reading Network",
                description: "Platform for sharing book reviews, connecting readers, tracking your progress and more!",
                image: "readappUser.png",
            },
            {
                title: "Database Management",
                description: "App for administrating efficiently your local databases.",
                image: "fileManager.png",
            },
        ]
    },
    
    spanishText: {
        navbar: {
            work: "Trabajo",
            education: "Formación",
            resume: "Currículum",
        },
        workCards: [
            {
                title: "Tendencias de Amazon",
                description: "API para analizar tendencias en productos de Amazon.",
                image: "webScraper.png",
            },
            {
                title: "Red de Lectura",
                description: "Platforma para compartir reseñas, conectar lectores, registrar tu progreso y mucho más!",
                image: "readappUser.png",
            },
            {
                title: "Gestión de Bases de Datos",
                description: "App para administrar eficientemente bases de datos locales.",
                image: "fileManager.png",
            },
        ]
    },
}