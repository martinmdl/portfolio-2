import { useNavigate } from "react-router-dom";

export function Education() {

    const navigate = useNavigate();

    return (
        <>
            <p>Edu</p>

            <button onClick={() => navigate('/')}>Return</button>
        </>
    )
}