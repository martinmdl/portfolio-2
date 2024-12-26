// https://www.npmjs.com/package/react-parallax-tilt?activeTab=readme
import Tilt from 'react-parallax-tilt';
import './Card.css';

export function Card() {

    return (
        <>
            <Tilt
                className="card-tilt"

                tiltMaxAngleX={6}
                tiltMaxAngleY={6}                
                tiltReverse={true}                
                scale={1.03}
                transitionSpeed={5000}
                
                // element's proximity
                perspective={3000}

                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="var(--sec)"
                glarePosition="all"
                glareBorderRadius="10px"
                glareReverse={false}
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