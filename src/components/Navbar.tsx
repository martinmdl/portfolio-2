import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toggleTheme } from "../Themes";
import './Navbar.css';

export function Navbar() {
  
  const [text, i18n] = useTranslation("global");
  const [isEnglish, setIsEnglish] = useState(true);
  const [isLight, setIsLight] = useState(false);

  const themeClass: string = isLight ? "icon-light" : "icon-dark";

  function handleThemeToggle() {
    toggleTheme();
    setIsLight(!isLight);
  }

  function handleLanguageToggle(lang: string) {
    i18n.changeLanguage(lang);
    setIsEnglish(!isEnglish)
  }
 
  return (
      <header className="header">

        <h1 className="title">
          Martín De Lojo
          <p className="typewriter">| Jr. Backend Developer</p>          
        </h1>

        <nav className="navbar">
          <CustomLink to="/work">{text("navbar.work")}</CustomLink>      
          <CustomLink to="/education">{text("navbar.education")}</CustomLink>
          <CustomLink to="/resume">{text("navbar.resume")}</CustomLink>
          <div className="navbar-controls">
            <button className={themeClass} onClick={handleThemeToggle}></button>
            {isEnglish ?
              <button className="icon-lang lang-en" onClick={() => { handleLanguageToggle("es") }}></button>
              : <button className="icon-lang lang-es" onClick={() => { handleLanguageToggle("en") }}></button>
            }
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