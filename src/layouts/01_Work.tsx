import { useContext, useState } from "react";
import { LangContext, LangContextType } from "../contexts/LangContext";
import { getLanguage } from "../Translation";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import './Page.css';
import './01_Work.css';
import frontPic from '../assets/frontPic.jpg'

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

    return (
        <main className="main">

            <section className="upper-main">             

                <section className="main-card">

                    <img src={frontPic} alt="profile_picture" />

                    <article className="text-content">

                        <div className="alert-title">
                            <div className="icon-static"></div>
                            <div className="icon-shadow"></div>
                            <h2>Open to work</h2>
                        </div>

                        <p className="paragraph">I am an advanced Computer Programming student at UNSAM</p>

                    </article>
                    
                </section>

            </section>

            <section className="lower-main">
                <section className="projects-frame">
                    <section className="carousel-frame">

                        <button className="arrow">{"<"}</button>

                        <section className="cards-frame">

                            {activeModal && <Modal onClose={handleModalToggle} />}

                            {currentLanguage.workCards.map(item =>
                                <button className="card-button" onClick={handleModalToggle}>
                                    <Card key={item.id} title={item.title} description={item.description} image={item.image} />
                                </button>
                            )}

                        </section>

                        <button className="arrow">{">"}</button>

                    </section>
                </section>
            </section>

        </main>
    )
}