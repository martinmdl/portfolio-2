import amazon from "../assets/workCards/amazon.png";
import readUser from "../assets/workCards/readUser.png";
import files from "../assets/workCards/files.png";
import moles from "../assets/workCards/moles.png";
import univenture from "../assets/workCards/univenture.png";

import frontendUtn from "../assets/eduCards/course 1.png";
import nodejsAdvance from "../assets/eduCards/course 2.png";
import devFundamentals from "../assets/eduCards/course 3.png";
import machineLearning from "../assets/eduCards/course 4.png";
import nodejsEssential from "../assets/eduCards/course 5.png";
import devEssential from "../assets/eduCards/course 6.png";
import devSkills from "../assets/eduCards/course 7.png";

export const spanishText = {
    
    navbar: {
        work: "Trabajo",
        education: "Formación",
        resume: "Currículum",
    },
    
    /**** WORK TAB ****/

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
            image: amazon,
        },
        {
            id: 2,
            title: "Red de Lectura",
            description: "Platforma para compartir reseñas, conectar lectores, registrar tu progreso y mucho más!",
            image: readUser,
        },
        {
            id: 3,
            title: "Gestión de Bases de Datos",
            description: "App para administrar eficientemente bases de datos locales.",
            image: files,
        },
        {
            id: 4,
            title: `Whac-a-Mole`,
            description: "Popular juego arcade de topos!",
            image: moles,
        },
        {
            id: 5,
            title: `Story Game`,
            description: "Juego interactivo con múltiples desenlaces, desarrollado en Assembly.",
            image: univenture,
        },
    ],

    /**** EDUCATION TAB ****/

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
            description: "Asincronismo y manejo de bases de datos, LinkedIn Learning.",
            image: nodejsAdvance,
        },
        {
            id: 3,
            title: "Fundamentos del Desarrollo",
            description: "Ciclo de vida del desarrollo de sofware, Microsoft y LinkedIn Learning.",
            image: devFundamentals,
        },
        {
            id: 4,
            title: "Fundamentos del Machine Learning",
            description: "Algoritmos populares como árboles, clusterización y regresión lineal, LinkedIn Learning.",
            image: machineLearning,
        },
        {
            id: 5,
            title: "NodeJS Introductorio",
            description: "Rutas, JSONs y manejo de archivos, LinkedIn Learning.",
            image: nodejsEssential,
        },
        {
            id: 6,
            title: "Funtamentos de la Programación",
            description: "Certificación Career Essentials, Microsoft y LinkedIn Learning.",
            image: devEssential,
        },
        {
            id: 7,
            title: "Habilidades de Desarrollo",
            description: "Certificación GSI Programming Foundations, Microsoft y LinkedIn Learning.",
            image: devSkills,
        },
    ],

    notFound: {
        title: "Error 404: Página no encontrada",
        button: "Regresar al sitio",
    }
}