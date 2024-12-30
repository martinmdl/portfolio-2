import { ReactNode, useState } from "react";
import { LangContext } from "./LangContext";
import { isSpanishMode, toggleLanguage } from "../Translation";

export const LangProvider = ({ children } : {children: ReactNode} ) => {

    const [isSpanish, setIsSpanish] = useState(isSpanishMode());

    const value = {

        isSpanish,

        toggleLang: () => {
            setIsSpanish(toggleLanguage());
        },
    }

    return (
        <LangContext.Provider value={value} >
            {children}
        </LangContext.Provider>
    )

}