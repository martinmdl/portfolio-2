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
            emailCopy: "Copied!",
            languages: ["Advanced English,", "Native Spanish"],
            university: "UNSAM Computer Programming student",
            availability: "Full Time / Part Time",
            location: "CABA, Argentina",
            techStack: ["|", "TypeScript", "React", "Node", "SpringBoot", "Kotlin"],
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
            {
                id: 4,
                title: `Example 4`,
                description: "This is just an example paragraph to test card display.",
                image: fileManager,
            },
            {
                id: 5,
                title: `Example 5`,
                description: "This is just an example paragraph to test card display.",
                image: fileManager,
            },
            {
                id: 6,
                title: `Example 6`,
                description: "This is just an example paragraph to test card display.",
                image: fileManager,
            },
        ],
        eduText: ["About to graduate as a", "Computer Programming Technician", "from Universidad Nacional de San Martín (UNSAM) by the end of 2025. My education and experience allow me to engineer", "Performant", "solutions. Although I have a preference for and more experience in", "Backend", "development, I also feel comfortable working on the", "Frontend,", "as I have recently acquired extensive knowledge of", "React", ". Lastly, I would like to highlight my", "Communication", "skills and proficiency in English."],
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
            emailCopy: "Copiado!",
            languages: ["Inglés Avanzado,", "Español Nativo"],
            university: "Estudiante de Programación Informática UNSAM",
            availability: "Full Time / Part Time",
            location: "CABA, Argentina",
            techStack: ["|", "TypeScript", "React", "Node", "SpringBoot", "Kotlin"],
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
            {
                id: 4,
                title: `Example 4`,
                description: "This is just an example paragraph to test card display.",
                image: fileManager,
            },
            {
                id: 5,
                title: `Example 5`,
                description: "This is just an example paragraph to test card display.",
                image: fileManager,
            },
            {
                id: 6,
                title: `Example 6`,
                description: "This is just an example paragraph to test card display.",
                image: fileManager,
            },
        ],
        eduText: ["Próximo a recibirme de", "Técnico Programador Informático", "de la Universidad Nacional de San Martín (UNSAM) a fines de 2025. Mi formación y experiencia me permiten ingeniar soluciones", "Performantes.", "Aunque tenga preferencia y más experiencia en el desarrollo", "Backend,", "también me siento cómodo desarrollando", "Frontend,", "ya que ultimamente adquirí amplios conocimientos de", "React.", "Por úlitmo, quiero agregar que me caracterizo por mi capacidad de", "Comunicación", "y manejo del inglés."],
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