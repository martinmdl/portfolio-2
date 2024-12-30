import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { toggleLanguage, getLanguage } from "../Translation";
import { toggleTheme, consultTheme } from "../Theme";
import './Navbar.css';

export function Navbar() {
  
  const [isLight, setIsLight] = useState(consultTheme());
  const [isEnglish, setIsEnglish] = useState(true);

  const themeClass: string = isLight ? "icon-light" : "icon-dark";
  const langClass: string = `icon-lang ${isEnglish ? "lang-en" : "lang-es"}`


  function handleThemeToggle() {
    setIsLight(toggleTheme());
  }

  function handleLanguageToggle() {
    setIsEnglish(toggleLanguage());
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