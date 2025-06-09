import { useContext, useEffect, useState } from "react";
import { LangContext, LangContextType } from "../contexts/LangContext";
import { Email } from "../components/Email";

import { FaEarthAmericas } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { PiToolboxFill } from "react-icons/pi";
import { BsClockFill } from "react-icons/bs";
import { IoBook } from "react-icons/io5";

import { getLanguage } from "../utils/LangTranslator";
import { Card } from "../components/Card";

import './Page.css';
import './01_Work.css';
import frontPic from '../assets/frontPic.jpg';

export function Work() {

    /**** LANGUAGE ****/
    const { isSpanish } = useContext<LangContextType | null>(LangContext)!;
    const currentLanguage = getLanguage(isSpanish);

    /**** CAROUSEL ****/
    useEffect(() => {
        setCards(currentLanguage.workCards.map(item => 
            <Card key={item.id} title={item.title} description={item.description} image={item.image} />
        ));
    }, [currentLanguage]);

    const [cards, setCards] = useState<JSX.Element[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    const cardsPerPage = 3;
    const cardsJump = 1;

    function showCards() {
        return cards.slice(currentPage, currentPage + cardsPerPage);
    }

    function handleNextPage() {
        if(currentPage + cardsJump <= cards.length - cardsPerPage) {
            setCurrentPage((page) => page + cardsJump);
        }
    }
    
    function handlePrevPage() {
        if(currentPage - cardsJump >= 0) {
            setCurrentPage((page) => page - cardsJump);
        }
    }

    return (
        <main className="main">

            <section className="upper-main">             

                <h1 className="mobile-title">Martín De Lojo | Frontend Dev</h1>

                <section className="main-card">

                    <img src={frontPic} alt="profile_picture" />

                    <article className="text-content">

                        <Email emailCopy={currentLanguage.workText.emailCopy} centered={false} />

                        <p className="paragraph"><FaEarthAmericas className="icon"/><b>{currentLanguage.workText.languages[0]}</b> {currentLanguage.workText.languages[1]}</p>
                        <p className="paragraph"><IoBook className="icon"/>{currentLanguage.workText.university}</p>
                        <p className="paragraph"><BsClockFill className="icon"/>{currentLanguage.workText.availability}</p>
                        <p className="paragraph"><FaLocationDot className="icon"/>{currentLanguage.workText.location}</p>
                        <p className="paragraph"><PiToolboxFill className="icon"/><b>{currentLanguage.workText.techStack[1]}</b> {currentLanguage.workText.techStack[0]} <b>{currentLanguage.workText.techStack[2]}</b> {currentLanguage.workText.techStack[0]} {currentLanguage.workText.techStack[cardsPerPage]} {currentLanguage.workText.techStack[0]} {currentLanguage.workText.techStack[4]} {currentLanguage.workText.techStack[0]} {currentLanguage.workText.techStack[5]}</p>

                    </article>
                    
                </section>

            </section>

            <h2 className="mobile-subtitle">Proyectos</h2>
            
            <section className="lower-main">
                <section className="projects-frame">
                    <section className="carousel-frame">

                        <button className={currentPage == 0? "invisible-arrow" : "arrow"} onClick={handlePrevPage}>{"<"}</button>

                        <section className="cards-frame">
                            {showCards()}
                        </section>

                        <button className={currentPage == cards.length - cardsPerPage? "invisible-arrow" : "arrow"} onClick={handleNextPage}>{">"}</button>

                    </section>
                </section>
            </section>

        </main>
    )
}