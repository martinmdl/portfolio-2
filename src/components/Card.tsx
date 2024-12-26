import Tilt from 'react-parallax-tilt';
import './Card.css';

export function Card() {

    return (
        <>
            <Tilt
                className="card-container"
                glareEnable={true}
                glareMaxOpacity={0.9}
                glareColor="lightblue"
                glarePosition="all"
            // glareBorderRadius="20px"
            >


                <div className="inner-element"></div>

            </Tilt>

            {/* <article className="card">
                <div className="card-content">
                    <h2>01</h2>
                    <h3>Card One</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eum provident autem expedita deserunt tempore a doloremque maiores. Laboriosam laborum fugit sunt minus asperiores veritatis expedita maiores esse eaque itaque!</p>
                    <a href="">Read More</a>
                </div>
            </article> */}
        </>
    )
}