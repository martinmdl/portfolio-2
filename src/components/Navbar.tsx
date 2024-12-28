import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { toggleTheme } from "../Themes";
import './Navbar.css';

export function Navbar() {

  const [isLight, setIsLight] = useState(false);

  function handleThemeToggle() {
    toggleTheme();
    setIsLight(!isLight);
  }

  // const themeClass = () => { return isLight ? "icon-light" : "icon-dark" }
  const themeClass: string = isLight ? "icon-light" : "icon-dark";
 
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