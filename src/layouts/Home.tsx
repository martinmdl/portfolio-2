// import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function Home() {

    const navigate = useNavigate();
        
    return (
        <>
            <h1>Home</h1>

            <p>Welcome to the home page</p>

            <button onClick={() => navigate('/')}>home</button>

            <button onClick={() => navigate('/work')}>work</button>

            <button onClick={() => navigate("/works")}>404</button>
        </>
    )
}