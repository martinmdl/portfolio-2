import { useNavigate } from 'react-router-dom';

export function Resume() {

    const navigate = useNavigate();
    
    return (
        <>
            <p>Resume</p>

            <button onClick={() => navigate('/')}>Return</button>
        </>
    )
}