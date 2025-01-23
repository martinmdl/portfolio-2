import { useContext } from "react";
import { Email } from "../components/Email";
import { LangContext, LangContextType } from "../contexts/LangContext";

import { getLanguage } from "../utils/LangTranslator";
import { Card } from "../components/Card";

import './Page.css';
import './02_Education.css';

export function Education() {

    /**** LANGUAGE ****/
    const { isSpanish } = useContext<LangContextType | null>(LangContext)!;
    const currentLanguage = getLanguage(isSpanish);

    return (
        <main className="main">

            <section className="upper-main">

                <h1 className="mobile-title">Martín De Lojo | Jr. Backend Dev</h1>         

                <section className="main-card">

                    <article className="text-container">

                        <Email emailCopy={currentLanguage.workText.emailCopy} centered={true} />

                        <p className="paragraph">{currentLanguage.eduText[0]} <b>{currentLanguage.eduText[1]}</b> {currentLanguage.eduText[2]} <b>{currentLanguage.eduText[3]}</b> {currentLanguage.eduText[4]} <b>{currentLanguage.eduText[5]}</b> {currentLanguage.eduText[6]} <b>{currentLanguage.eduText[7]}</b> {currentLanguage.eduText[8]} <b>{currentLanguage.eduText[9]}</b> {currentLanguage.eduText[10]} <b>{currentLanguage.eduText[11]}</b> {currentLanguage.eduText[12]} <b>{currentLanguage.eduText[13]}</b></p>

                    </article>
                    
                </section>

            </section>

            <h2 className="mobile-subtitle">Diplomas</h2>

            <section className="lower-main">
                <section className="projects-frame">
                    <section className="carousel-frame">

                        {/* <button className="arrow">{"<"}</button> */}
                        <button className="arrow"></button>

                        <section className="cards-frame">
                            {currentLanguage.eduCards.map(item =>
                                    <Card key={item.id} title={item.title} description={item.description} image={item.image} />
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