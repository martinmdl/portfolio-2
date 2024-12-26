// https://www.npmjs.com/package/react-parallax-tilt?activeTab=readme
import Tilt from 'react-parallax-tilt';
import './Card.css';

export function Card() {

    return (
        <>
            <Tilt
                className="card-tilt"

                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="var(--bg2)"
                glarePosition="all"
                glareBorderRadius="10px"
                glareReverse={false}

                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                
                tiltReverse={true}

                scale={1.03}
                transitionSpeed={5000}

                // Proximity with child item
                perspective={3000}
            >

                <article className="card">
                    <div className="card-image">
                        <img src="readappUser.png" />
                    </div>
                    <div className='card-text'>
                        <h2>Social Network</h2>
                        <p>App to share and rate book reviews, connect readers, track your readings, etc.</p>
                    </div>
                </article>

            </Tilt>

        </>
    )
}