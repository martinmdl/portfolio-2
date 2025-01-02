import { useContext, useState } from "react";
import { LangContext, LangContextType } from "../contexts/LangContext";
import { getLanguage } from "../Translation";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import './Page.css';
import './01_Work.css';

export function Work() {

    const { isSpanish } = useContext<LangContextType | null>(LangContext)!;

    const currentLanguage = getLanguage(isSpanish);

    const [activeModal, setActiveModal] = useState(false);

    function handleModalToggle() {
        setActiveModal(!activeModal)
    }


    return (
        <main className="main">

            <section className="upper-main">
                <article className="alert-title">
                    <div className="icon-static"></div>
                    <div className="icon-shadow"></div>
                    <h2>Open to work</h2>
                </article>

                <ul className="list">
                    <li className="list-item">Estudiante avanzado UNSAM</li>
                    <li className="list-item">Hybrid</li>
                    <li className="list-item">martinmdl42@gmail.com</li>
                    <li className="list-item">Español nativo, ingles avanzado</li>
                </ul>
                
            </section>

            <section className="lower-main">

                {activeModal && <Modal />}

                {currentLanguage.workCards.map(item =>
                    <button className="card-button" onClick={handleModalToggle}>
                        <Card key={item.id} title={item.title} description={item.description} image={item.image} />
                    </button>
                )}


            </section>

        </main>
    )
}