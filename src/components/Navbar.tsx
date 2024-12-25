import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
  
  // const isActive = useMatch(to);

  return (
    <>
      <Link to="/">Work</Link>
      <Link to="/edu">Education</Link>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/404">404</Link>
    </>
  )
}