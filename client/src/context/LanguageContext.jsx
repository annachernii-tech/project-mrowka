import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../i18n/translations.js";

// Create language context
const LanguageContext = createContext();

export function LanguageProvider({ children }) {

  // Get language from localStorage or use default
    const [lang, setLang] = useState(
        localStorage.getItem("lang") || "pl"
    );

    // Save selected language to localStorage
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    // Get translations for current language
    const t = translations[lang];

    return (
        // Provide language state and translations to the whole app
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Custom hook to access language context
export function useLanguage() {
  return useContext(LanguageContext);
}