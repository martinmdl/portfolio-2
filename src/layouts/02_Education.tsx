import { useContext, useState } from "react";
import { LangContext, LangContextType } from "../contexts/LangContext";
import { MdEmail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";

import { getLanguage } from "../Translation";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";

import './Page.css';
import './02_Education.css';

export function Education() {

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

                    <article className="text-container">

                        <p className="paragraph ending"><MdEmail className="icon"/> <b>{currentLanguage.workText.email}</b> <FaRegCopy className="copy-button icon" onClick={handleCopy}/> {showAlert && <span className="copy-alert">{currentLanguage.workText.emailCopy}</span>}</p>

                        <p className="paragraph">{currentLanguage.eduText[0]} <b>{currentLanguage.eduText[1]}</b> {currentLanguage.eduText[2]} <b>{currentLanguage.eduText[3]}</b> {currentLanguage.eduText[4]} <b>{currentLanguage.eduText[5]}</b> {currentLanguage.eduText[6]} <b>{currentLanguage.eduText[7]}</b> {currentLanguage.eduText[8]} <b>{currentLanguage.eduText[9]}</b> {currentLanguage.eduText[10]}</p>

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

                            {currentLanguage.eduCards.map(item =>
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