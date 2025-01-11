import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LangContext, LangContextType } from "../contexts/LangContext";
import { getLanguage } from "../utils/LangTranslator";
import './00_NotFound.css';

export function NotFound() {

    const navigate = useNavigate();

    const { isSpanish } = useContext<LangContextType | null>(LangContext)!;
    
    const currentLanguage = getLanguage(isSpanish);

    return (
        <main className='main-not-found'>
            <h1>{currentLanguage.notFound.title}</h1>
            <button onClick={() => navigate('/')}>{currentLanguage.notFound.button}</button>
        </main>
    )
}