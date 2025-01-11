import { LangProvider } from './contexts/LangProvider';
import { Navbar } from './components/Navbar';
import { Router } from './utils/Router';
import './App.css';

export default function App() {
  
  return (
    <LangProvider>
      <Navbar />
      <Router />
    </LangProvider>
  )
}