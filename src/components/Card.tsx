// import Tilt from 'react-parallax-tilt';
import './Card.css';

export function Card() {

    return (
        <>
            {/* <Tilt
                className="card-tilt"
                glareEnable={true}
                glareMaxOpacity={0.9}
                glareColor="lightblue"
                glarePosition="all"
            // glareBorderRadius="20px"
            >


                <div className="inner-element"></div>

            </Tilt> */}

            <article className="card">
                <div className="card-image"></div>
                <div className='card-text'>
                    <h2>ReadApp</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eum provident. Hola comooo estas. Hola como estas: Bien y vos. Hola como estas. Hola como estas.</p>
                </div>
            </article>
        </>
    )
}