import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


export function Home() {

    const navigate = useNavigate();
        
    return (
        <>
            <h1>Home</h1>

            <p>Welcome to the home page</p>

            <Button variant="contained" onClick={() => navigate('/')}>home</Button>

            <Button variant="contained" onClick={() => navigate('/work')}>work</Button>

            <Button variant="contained" onClick={() => navigate("/works")}>404</Button>
        </>
    )
}