import { Link, useMatch } from "react-router-dom";
import './Navbar.css';

export function Navbar() {

  return (
      <header className="header">

        <h1 className="title">
          Martín De Lojo
          <p className="typewriter">| Backend Developer</p>          
        </h1>

        <nav className="navbar">
          <CustomLink to="/">Work</CustomLink>      
          <CustomLink to="/edu">Education</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/resume">Resume</CustomLink>
          <CustomLink to="/404">404</CustomLink>
        </nav>

      </header>
  )
}

function CustomLink({to, children}: CustomLinkProps) {

  const isActive = useMatch(to);

  return (
    <Link to={to} className={isActive ? "navbar-button-active" : "navbar-button"}>
      {children}
    </Link>
  )
}

type CustomLinkProps = {
  to: string;
  children: string;
};