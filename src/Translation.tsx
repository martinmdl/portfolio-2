import webScraper from "./assets/workCards/webScraper.png";
import readappUser from "./assets/workCards/readappUser.png";
import fileManager from "./assets/workCards/fileManager.png";

import frontendUtn from "./assets/eduCards/course 1.png";
import nodejsAdvance from "./assets/eduCards/course 2.png";
import devFundamentals from "./assets/eduCards/course 3.png";

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
        workText: {
            email: "Email: martinmdl42@gmail.com",
            emailCopy: "Copied!",
            languages: "Languages: Advanced English, Native Spanish",
            university: "University: Advance Computer Programming student",
            availability: "Availability: Full Time / Part Time",
            location: "Location: CABA, Argentina (GMT -3)",
            techStack: "Tech Stack: Typescript | React | Node | SpringBoot | Kotlin",
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
        eduCards: [
            {
                id: 1,
                title: "Frontend Developer",
                description: "E-commerce development, Universidad Tecnológica Nacional.",
                image: frontendUtn,
            },
            {
                id: 2,
                title: "Advanced NodeJS",
                description: "Asynchronism and database interaction, LinkedIn Learning.",
                image: nodejsAdvance,
            },
            {
                id: 3,
                title: "Professional Software Fundamentals",
                description: "Software development life cycle, Microsoft and LinkedIn Learning.",
                image: devFundamentals,
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
        workText: {
            email: "Email: martinmdl42@gmail.com",
            emailCopy: "Copiado!",
            languages: "Idiomas: Inglés Avanzado, Español Nativo",
            university: "Universidad: Avanzado de Programación Informática",
            availability: "Disponibilidad: Full Time / Part Time",
            location: "Ubicación: CABA, Argentina (GMT -3)",
            techStack: "Tech Stack: Typescript | React | Node | SpringBoot | Kotlin",
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
        eduCards: [
            {
                id: 1,
                title: "Desarrollador Frontend",
                description: "Desarrollo de e-commerce, Universidad Tecnológica Nacional.",
                image: frontendUtn,
            },
            {
                id: 2,
                title: "NodeJS Avanzado",
                description: "Asincronismo e interacción con bases de datos, LinkedIn Learning.",
                image: nodejsAdvance,
            },
            {
                id: 3,
                title: "Fundamentos del Desarrollo",
                description: "Ciclo de vida del desarrollo de sofware, Microsoft y LinkedIn Learning.",
                image: devFundamentals,
            },
        ],
        notFound: {
            title: "Error 404: Página no encontrada",
            button: "Regresar al sitio",
        }
    },
}