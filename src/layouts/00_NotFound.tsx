import { useNavigate } from 'react-router-dom';

export function NotFound() {

    const navigate = useNavigate();

    return (
        <>
            <p>404</p>

            <button onClick={() => navigate('/')}>Return</button>
        </>
    )
}