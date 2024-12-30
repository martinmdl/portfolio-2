import { ReactNode, useState } from "react";
import { LangContext } from "./LangContext";
import { getLanguage, toggleLanguage } from "../Translation";

export const LangProvider = ({ children } : {children: ReactNode} ) => {

    const [language, setLanguage] = useState({})

    const value = {

        language,

        toggleLang: () => {
            setLanguage(toggleLanguage());
        },

        getLang: () => {
            setLanguage(getLanguage());
        },

        // getLang: () => {
        //     setLanguage(localStorage.getItem("language")!);
        // },
    }

    return (
        <LangContext.Provider value={value} >
            {children}
        </LangContext.Provider>
    )

}