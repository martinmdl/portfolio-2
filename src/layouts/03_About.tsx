import { useNavigate } from "react-router-dom"

export function About() {

    const navigate = useNavigate();

    return (
        <>
            <p>About</p>

            <button onClick={() => navigate("/")}>Return</button>
        </>
    )
}