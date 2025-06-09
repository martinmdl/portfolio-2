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

export const englishText = {

    navbar: {
        work: "Work",
        education: "Education",
        resume: "Resume",
    },

    /**** WORK TAB ****/
    
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
            image: amazon,
        },
        {
            id: 2,
            title: "Reading Network",
            description: "Platform for sharing book reviews, connecting readers, tracking your progress and more!",
            image: readUser,
        },
        {
            id: 3,
            title: "Database Management",
            description: "App for administrating efficiently your local databases.",
            image: files,
        },
        {
            id: 4,
            title: `Whac-a-Mole`,
            description: "Popular arcade game of moles!",
            image: moles,
        },
        {
            id: 5,
            title: `Story Game`,
            description: "Interactive game with multiple endings, developed in Assembly.",
            image: univenture,
        },
    ],
    
    /**** EDUCATION TAB ****/

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
            description: "Asynchronism and database management, LinkedIn Learning.",
            image: nodejsAdvance,
        },
        {
            id: 3,
            title: "Professional Software Fundamentals",
            description: "Software development life cycle, Microsoft and LinkedIn Learning.",
            image: devFundamentals,
        },
        {
            id: 4,
            title: "Machine Learning Fundamentals",
            description: "Popular algorithms such as trees, clustering and linear regression, LinkedIn Learning.",
            image: machineLearning,
        },
        {
            id: 5,
            title: "Beginner NodeJS",
            description: "Routes, JSONs and file management, LinkedIn Learning.",
            image: nodejsEssential,
        },
        {
            id: 6,
            title: "Programming Funtamentals",
            description: "Career Essentials Certificate, Microsoft and LinkedIn Learning.",
            image: devEssential,
        },
        {
            id: 7,
            title: "Professional Developer Skills",
            description: "GSI Programming Foundations Certificate, Microsoft and LinkedIn Learning.",
            image: devSkills,
        },
    ],

    notFound: {
    title: "Error 404: Page not found",
        button: "Return to the site",
    }
}