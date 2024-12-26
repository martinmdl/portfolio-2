import { Card } from "../components/Card";
import './Page.css';

export function Work() {

    const cardsCount = [1, 2, 3];

    return (
        <section className="page">

            {cardsCount.map((index) =>
            <Card key={index} />)}

            {/* <Card /> */}

        </section>
    )
}