import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { translator } from "../Translation";
import { toggleTheme, consultTheme } from "../Theme";
import './Navbar.css';

export function Navbar() {
  
  const [isLight, setIsLight] = useState(consultTheme());
  const [isEng, setIsEng] = useState(true);

  const themeClass: string = isLight ? "icon-light" : "icon-dark";
  const langClass: string = `icon-lang ${isEng ? "lang-en" : "lang-es"}`


  function handleThemeToggle() {
    setIsLight(toggleTheme());
  }

  function handleLanguageToggle() {
    setIsEng(translator.toggleLanguage());
  }
 
  return (
      <header className="header">

        <h1 className="title">
          Martín De Lojo
          <p className="typewriter">| Jr. Backend Developer</p>          
        </h1>

        <nav className="navbar">
          <CustomLink to="/work">{translator.getText().translation.navbar.work}</CustomLink>      
          <CustomLink to="/education">{translator.getText().translation.navbar.education}</CustomLink>
          <CustomLink to="/resume">{translator.getText().translation.navbar.resume}</CustomLink>
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