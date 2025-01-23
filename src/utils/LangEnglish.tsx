import webScraper from "../assets/workCards/webScraper.png";
import readappUser from "../assets/workCards/readappUser.png";
import fileManager from "../assets/workCards/fileManager.png";

import frontendUtn from "../assets/eduCards/course 1.png";
import nodejsAdvance from "../assets/eduCards/course 2.png";
import devFundamentals from "../assets/eduCards/course 3.png";

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
            description: "Asynchronism and database interaction, LinkedIn Learning.",
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
            title: "Example 4",
            description: "This is just an example paragraph to test card display.",
            image: fileManager,
        },
    ],

    notFound: {
    title: "Error 404: Page not found",
        button: "Return to the site",
    }
}