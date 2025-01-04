import { useContext, useState } from "react";
import { LangContext, LangContextType } from "../contexts/LangContext";
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

    return (
        <main className="main">

            <section className="upper-main">                
                <section className="section-text">

                    <article className="alert-title">
                        <div className="icon-static"></div>
                        <div className="icon-shadow"></div>
                        <h2>About to graduate</h2>
                    </article>

                    <p className="paragraph">I am an advanced Computer Programming student at UNSAM</p>

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