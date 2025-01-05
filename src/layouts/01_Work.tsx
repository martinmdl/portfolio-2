import { useContext, useState } from "react";
import { LangContext, LangContextType } from "../contexts/LangContext";

import { FaRegCopy } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiToolboxFill } from "react-icons/pi";
import { BsClockFill } from "react-icons/bs";
import { IoBook } from "react-icons/io5";

import { getLanguage } from "../Translation";
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

    // const cardsPerPage = 4;


    /**** COPY TEXT ****/
    const [showAlert, setShowAlert] = useState(false);    
    async function handleCopy() {
        try {
            await navigator.clipboard.writeText("martinmdl42@gmail.com");
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 1000);
        } catch (err) {
            console.log("Failed to copy text:", err);
        }
    }

    return (
        <main className="main">

            <section className="upper-main">             

                <section className="main-card">

                    <img src={frontPic} alt="profile_picture" />

                    <article className="text-content">

                        <div className="alert-container">
                            <div className="alert-icon"></div>
                            <div className="alert-shadow"></div>
                            <h2 className="alert-title">Open to work!</h2>
                        </div>

                        <p className="paragraph"><MdEmail className="icon"/> {currentLanguage.workText.email} <FaRegCopy className="copy-button icon" onClick={handleCopy}/> {showAlert && <span className="copy-alert">{currentLanguage.workText.emailCopy}</span>}</p>
                        <p className="paragraph"><FaEarthAmericas className="icon"/> {currentLanguage.workText.languages}</p>
                        <p className="paragraph"><IoBook className="icon"/> {currentLanguage.workText.university}</p>
                        <p className="paragraph"><BsClockFill className="icon"/> {currentLanguage.workText.availability}</p>
                        <p className="paragraph"><FaLocationDot className="icon"/> {currentLanguage.workText.location}</p>
                        <p className="paragraph"><PiToolboxFill className="icon"/> {currentLanguage.workText.techStack}</p>

                    </article>
                    
                </section>

            </section>

            <section className="lower-main">
                <section className="projects-frame">
                    <section className="carousel-frame">

                        {/* <button className="arrow">{"<"}</button> */}
                        <button className="arrow"></button>

                        <section className="cards-frame">

                            {activeModal && <Modal onClose={handleModalToggle} />}

                            {currentLanguage.workCards.map(item =>
                                <button className="card-button" onClick={handleModalToggle}>
                                    <Card key={item.id} title={item.title} description={item.description} image={item.image} />
                                </button>
                            )}

                        </section>

                        {/* <button className="arrow">{">"}</button> */}
                        <button className="arrow"></button>

                    </section>
                </section>
            </section>

        </main>
    )
}