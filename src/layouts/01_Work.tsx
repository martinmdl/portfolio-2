import { Card } from "../components/Card";
import './Page.css';

export function Work() {

    const cardsCount = [
        {
            title: "Amazon Scraper",
            description: "API to list most used words in Amazon products description",
            image: "readappUser.png",
        },
        {
            title: "Social Network",
            description: "Platform to share and rate book reviews, connect readers, track your readings, etc.",
            image: "readappUser.png",
        },
        {
            title: "Social Network",
            description: "App to share and rate book reviews, connect readers, track your readings, etc.",
            image: "readappUser.png",
        },
    ];

    return (
        <main className="page">

            {cardsCount.map(item =>
                <Card key={item.title} title={item.title} description={item.description} image={item.image} />)
            }

        </main>
    )
}

