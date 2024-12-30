import { LangProvider } from './context/LangProvider';
import { Navbar } from './components/Navbar';
import { Router } from './Router';
import './App.css';

export default function App() {
  
  return (
    <LangProvider>
      <Navbar />
      <Router />
    </LangProvider>
  )
}