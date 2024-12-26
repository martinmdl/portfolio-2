import { Card } from "../components/Card";
import { cardsCount } from "../cards/workCards";
import './Page.css';
import './01_Work.css';

export function Work() {

    return (
        <main className="main">

            <section className="upper-main">

                <div className="container">
                    <button></button>
                    <div className="shadow"></div>
                </div>

                <h2>Open to work</h2>
                <ul className="list">
                    <li className="list-item">Estudiante avanzado UNSAM</li>
                    <li className="list-item">Hybrid</li>
                    <li className="list-item">martinmdl42@gmail.com</li>
                    <li className="list-item">Español nativo, ingles avanzado</li>
                </ul>
                
            </section>

            <section className="lower-main">

                {cardsCount.map( item =>
                    <Card key={item.title} title={item.title} description={item.description} image={item.image} />
                )}

            </section>


        </main>
    )
}

