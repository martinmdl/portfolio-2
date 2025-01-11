import { useContext, useState } from "react";
import { LangContext, LangContextType } from "../contexts/LangContext";
import { Email } from "../components/Email";

import { FaEarthAmericas } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { PiToolboxFill } from "react-icons/pi";
import { BsClockFill } from "react-icons/bs";
import { IoBook } from "react-icons/io5";

import { getLanguage } from "../utils/LangTranslator";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";

import './Page.css';
import './01_Work.css';
import frontPic from '../assets/frontPic.jpg';

export function Work() {

    /**** LANGUAGE ****/
    const { isSpanish } = useContext<LangContextType | null>(LangContext)!;
    const currentLanguage = getLanguage(isSpanish);

    /**** MODAL ****/
    const [activeModal, setActiveModal] = useState(false);
    function handleModalToggle() {
        setActiveModal(!activeModal);
    }
    
    /**** CAROUSEL ****/
    // const [cards, setCards] = useState<React.ReactElement[]>([]);
    // const [currentPage, setCurrentPage] = useState(0);
    // const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left");


    // useEffect(() => {
    //     setCards(currentLanguage.workCards)
    // })
    
    // const cardsPerPage = 3;

    // const duplicateCards: React.ReactElement[] = Array.from(
    //     { length: 10 },
    //     item => <Card key={item.id} title={item.title} description={item.description} image={item.image} />
    // )

    // function handleNextPage() {
    //     setSlideDirection("left");
    //     setCurrentPage((prevPage) => prevPage + 1);
    // }
    
    // function handlePrevPage() {
    //     setSlideDirection("right");
    //     setCurrentPage((prevPage) => prevPage - 1);
    // }

    return (
        <main className="main">

            <section className="upper-main">             

                <h1 className="mobile-title">Martín De Lojo | Jr. Backend Dev</h1>

                <section className="main-card">

                    <img src={frontPic} alt="profile_picture" />

                    <article className="text-content">

                        <Email emailCopy={currentLanguage.workText.emailCopy} centered={false} />

                        <p className="paragraph"><FaEarthAmericas className="icon"/><b>{currentLanguage.workText.languages[0]}</b> {currentLanguage.workText.languages[1]}</p>
                        <p className="paragraph"><IoBook className="icon"/>{currentLanguage.workText.university}</p>
                        <p className="paragraph"><BsClockFill className="icon"/>{currentLanguage.workText.availability}</p>
                        <p className="paragraph"><FaLocationDot className="icon"/>{currentLanguage.workText.location}</p>
                        <p className="paragraph"><PiToolboxFill className="icon"/><b>{currentLanguage.workText.techStack[1]}</b> {currentLanguage.workText.techStack[0]} <b>{currentLanguage.workText.techStack[2]}</b> {currentLanguage.workText.techStack[0]} {currentLanguage.workText.techStack[3]} {currentLanguage.workText.techStack[0]} {currentLanguage.workText.techStack[4]} {currentLanguage.workText.techStack[0]} {currentLanguage.workText.techStack[5]}</p>

                    </article>
                    
                </section>

            </section>

            <h2 className="mobile-subtitle">Proyectos</h2>
            
            <section className="lower-main">
                <section className="projects-frame">
                    <section className="carousel-frame">

                        <button className="arrow">{"<"}</button>
                        {/* <button className="arrow"></button> */}

                        <section className="cards-frame">

                            {activeModal && <Modal onClose={handleModalToggle} />}

                            {currentLanguage.workCards.map(item =>
                                <button className="card-button" onClick={handleModalToggle}>
                                    <Card key={item.id} title={item.title} description={item.description} image={item.image} />
                                </button>
                            )}

                        </section>

                        <button className="arrow">{">"}</button>
                        {/* <button className="arrow"></button> */}

                    </section>
                </section>
            </section>

        </main>
    )
}