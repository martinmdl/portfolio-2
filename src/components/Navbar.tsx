import { Link, useMatch } from "react-router-dom";
import { toggleTheme } from "../Themes";
import './Navbar.css';

export function Navbar() {

  return (
      <header className="header">

        <h1 className="title">
          Martín De Lojo
          <p className="typewriter">| Jr. Backend Developer</p>          
        </h1>

        <nav className="navbar">
          <CustomLink to="/work">Work</CustomLink>      
          <CustomLink to="/education">Education</CustomLink>
          <CustomLink to="/resume">Resume</CustomLink>
          <div className="navbar-controls">
            <button className="navbar-theme" onClick={toggleTheme}></button>
            <button className="navbar-lang"></button>
          </div>
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