import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { toggleLanguage, getLanguage, isSpanishMode } from "../Translation";
import { toggleTheme, isLightMode } from "../Theme";
import './Navbar.css';

export function Navbar() {
  
  const [isLight, setIsLight] = useState(isLightMode());
  const [isSpanish, setIsSpanish] = useState(isSpanishMode());
  
  const themeClass: string = isLight ? "icon-light" : "icon-dark";

  const langClass: string = `icon-lang ${isSpanish ? "lang-spanish" : "lang-english"}`;

  function handleThemeToggle() {
    setIsLight(toggleTheme());
  }

  function handleLanguageToggle() {
    setIsSpanish(toggleLanguage());
  }

  return (
    <header className="header">

      <h1 className="title">
        Martín De Lojo
        <p className="typewriter">| Jr. Backend Developer</p>
      </h1>

      <nav className="navbar">
        
        <CustomLink to="/work">{getLanguage().navbar.work}</CustomLink>      
        <CustomLink to="/education">{getLanguage().navbar.education}</CustomLink>
        <CustomLink to="/resume">{getLanguage().navbar.resume}</CustomLink>

        <div className="navbar-controls">
          <button className={themeClass} onClick={handleThemeToggle}></button>
          <button className={langClass} onClick={handleLanguageToggle}></button>
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