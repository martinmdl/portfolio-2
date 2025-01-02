import webScraper from "./assets/workCards/webScraper.png";
import readappUser from "./assets/workCards/readappUser.png";
import fileManager from "./assets/workCards/fileManager.png";

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

export function getLanguage(isSpanish: boolean) {
    if (isSpanish) {
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
                id: 1,
                title: "Amazon Trends",
                description: "API for analizing trending products in Amazon.",
                image: webScraper,
            },
            {
                id: 2,
                title: "Reading Network",
                description: "Platform for sharing book reviews, connecting readers, tracking your progress and more!",
                image: readappUser,
            },
            {
                id: 3,
                title: "Database Management",
                description: "App for administrating efficiently your local databases.",
                image: fileManager,
            },
        ],
        notFound: {
            title: "Error 404: Page not found",
            button: "Return to the site",
        }
    },
    
    spanishText: {
        navbar: {
            work: "Trabajo",
            education: "Formación",
            resume: "Currículum",
        },
        workCards: [
            {
                id: 1,
                title: "Tendencias de Amazon",
                description: "API para analizar tendencias en productos de Amazon.",
                image: webScraper,
            },
            {
                id: 2,
                title: "Red de Lectura",
                description: "Platforma para compartir reseñas, conectar lectores, registrar tu progreso y mucho más!",
                image: readappUser,
            },
            {
                id: 3,
                title: "Gestión de Bases de Datos",
                description: "App para administrar eficientemente bases de datos locales.",
                image: fileManager,
            },
        ],
        notFound: {
            title: "Error 404: Página no encontrada",
            button: "Regresar al sitio",
        }
    },
}