import { createContext } from "react";

export const LangContext = createContext<LangContextType | null>(null);

export type LangContextType = {
    isSpanish: boolean,
    toggleLang: () => void,
}