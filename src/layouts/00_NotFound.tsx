import { useNavigate } from 'react-router-dom';
import './00_NotFound.css';

export function NotFound() {

    const navigate = useNavigate();

    return (
        <main className='main-not-found'>
            <h1>Error 404: Page not found</h1>
            <button onClick={() => navigate('/')}>Return to the site</button>
        </main>
    )
}