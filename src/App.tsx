import { PageRouter } from './routes';
import { Header } from './components/Header';
import './App.css';

export default function App() {
  
  return (
    <div className='animatedBackground'>
      <Header />
      <PageRouter />
    </div>
  )
}