import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";
import pl from "./locales/pl/translation.json";
import de from "./locales/de/translation.json";
import fr from "./locales/fr/translation.json";
import es from "./locales/es/translation.json";
import it from "./locales/it/translation.json";
import pt from "./locales/pt/translation.json";
import nl from "./locales/nl/translation.json";
import uk from "./locales/uk/translation.json";

const savedLang = localStorage.getItem("lang");

const browserLang = navigator.language.split("-")[0];

const defaultLang = savedLang || browserLang || "en";
const resources = {
    en: { translation: en },
    ru: { translation: ru },
    pl: { translation: pl },
    de: { translation: de },
    fr: { translation: fr },
    es: { translation: es },
    it: { translation: it },
    pt: { translation: pt },
    nl: { translation: nl },
    uk: { translation: uk }
};

i18n.use(initReactI18next).init({
    resources,
    lng: defaultLang,
    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;
