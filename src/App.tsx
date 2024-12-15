import { PageRouter } from './routes';
import { Header } from './components/Header';
import { About } from './components/About';
import { Work } from './components/Work';
import { Education } from './components/Education';
import './App.css';

export default function App() {
  
  return (
    <>
      <Header />
      <PageRouter />
      <About />
      <Work />
      <Education />
    </>
  )
}