// https://www.npmjs.com/package/react-parallax-tilt?activeTab=readme
import Tilt from 'react-parallax-tilt';
import './Card.css';

export function Card({ title, description, image }: CardWorkProps) {

    return (
        <Tilt
            className="card-tilt"
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}                
            tiltReverse={true}                
            scale={1.03}
            transitionSpeed={5000}            
            perspective={3000}
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="var(--text)"
            glarePosition="all"
            glareBorderRadius="10px"
            glareReverse={false}
        >

            <section className="card">
                <article className="card-image">
                    <img src={image} alt="card-image" />
                </article>
                <article className='card-text'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </article>
            </section>

        </Tilt>
    )
}

type CardWorkProps = {
    title: string;
    description: string;
    image: string;
};