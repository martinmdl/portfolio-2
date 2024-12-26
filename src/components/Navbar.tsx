import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {

  // const isActive = useMatch(to);

  return (
      <header className="header">

        <h1 className="title">
          Martín De Lojo
          <p className="typewriter">| Backend Developer</p>          
        </h1>

        <nav className="navbar">
          <Link to="/" className="navbar-button active">Work</Link>      
          <Link to="/edu" className="navbar-button">Education</Link>
          <Link to="/about" className="navbar-button">About</Link>
          <Link to="/resume" className="navbar-button">Resume</Link>
          <Link to="/404" className="navbar-button">404</Link>
        </nav>

      </header>
  )
}