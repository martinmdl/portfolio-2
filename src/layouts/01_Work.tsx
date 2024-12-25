// import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function Work() {

    const navigate = useNavigate();
        
    return (
        <>
            <p>work</p>

            <button onClick={() => navigate("/404")}>404</button>

            <button onClick={() => navigate('/')}>Work</button>

            <button onClick={() => navigate('/edu')}>Education</button>

            <button onClick={() => navigate('/about')}>About</button>

            <button onClick={() => navigate('/cv')}>Resume</button>

        </>
    )
}