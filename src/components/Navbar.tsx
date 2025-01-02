import { useContext, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { LangContext, LangContextType } from "../contexts/LangContext";
import { getLanguage } from "../Translation";
import { toggleTheme, isLightMode } from "../Theme";
import './Navbar.css';

export function Navbar() {

  const cvSpanish = 'https://drive.google.com/file/d/1BFBy4yKEc4EgnBwv297LLPY5DMl0NpBt/view';

  /**** COLOR SCHEME ****/
  const [isLight, setIsLight] = useState(isLightMode());  
  
  const themeClass: string = isLight ? "icon-light" : "icon-dark";
  
  function handleThemeToggle() {
    setIsLight(toggleTheme());
  }
  
  /**** TOGGLE LANGUAGE ****/
  const { isSpanish, toggleLang } = useContext<LangContextType | null>(LangContext)!;
  
  const currentLanguage = getLanguage(isSpanish);
  
  const langClass: string = `icon-lang ${isSpanish ? "lang-spanish" : "lang-english"}`;

  function handleLanguageToggle() {
    toggleLang();
  }

  return (
    <header className="header">

      <h1 className="title">
        Martín De Lojo
        <p className="typewriter">| Jr. Backend Developer</p>
      </h1>

      <nav className="navbar">
        
        <CustomLink to="/work">{currentLanguage.navbar.work}</CustomLink>      
        <CustomLink to="/education">{currentLanguage.navbar.education}</CustomLink>
        <a className="navbar-button" href={cvSpanish} target="_blank" rel="noopener noreferrer">{currentLanguage.navbar.resume}</a>

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