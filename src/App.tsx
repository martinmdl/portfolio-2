import { PageRouter } from './routes';
import { NavBar } from './components/NavBar';
import './App.css';

export default function App() {
  
  return (
    <div className='animatedBackground'>
      <NavBar />
      <PageRouter />
    </div>
  )
}