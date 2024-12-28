import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { toggleTheme } from "../Themes";
import './Navbar.css';

export function Navbar() {

  const [isLight, setIsLight] = useState(false);

  const themeClass: string = isLight ? "icon-light" : "icon-dark";

  function handleThemeToggle() {
    toggleTheme();
    setIsLight(!isLight);
  }
 
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
            <button className={themeClass} onClick={handleThemeToggle}></button>
            <button className="icon-lang"></button>
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