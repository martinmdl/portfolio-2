import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { translator } from "../Translation";
import { toggleTheme } from "../Themes";
import './Navbar.css';

export function Navbar() {
  
  const [isLight, setIsLight] = useState(false);
  const [isEn, setIsEn] = useState(true);

  const themeClass: string = isLight ? "icon-light" : "icon-dark";

  function handleThemeToggle() {
    toggleTheme();
    setIsLight(!isLight);
  }

  function handleLanguageToggle() {
    translator.toggleLanguage();
    setIsEn(!isEn);
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
            <button className={`icon-lang ${translator.isEnglish ? "lang-en" : "lang-es"}`} onClick={() => { handleLanguageToggle() }}></button>
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