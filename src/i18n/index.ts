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
import cz from "./locales/cz/translation.json";
import ja from "./locales/ja/translation.json";
import ko from "./locales/ko/translation.json";
import no from "./locales/no/translation.json";
import sk from "./locales/sk/translation.json";
import sl from "./locales/sl/translation.json";
import sv from "./locales/sv/translation.json";
import zh from "./locales/zh/translation.json";

const savedLang = localStorage.getItem("lang");
const browserLang = navigator.language.split("-")[0];

const defaultLang = savedLang ?? browserLang ?? "en";
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
    ua: { translation: uk },
    cz: { translation: cz },
    ja: { translation: ja },
    ko: { translation: ko },
    no: { translation: no },
    sk: { translation: sk },
    sl: { translation: sl },
    sv: { translation: sv },
    zh: { translation: zh }
};

i18n.use(initReactI18next).init({
    resources,
    lng: defaultLang,
    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }
});
export async function loadLanguage(lang: string) {
    const messages = await import(`./locales/${lang}/translation.json`);

    if (!i18n.hasResourceBundle(lang, "translation")) {
        i18n.addResourceBundle(lang, "translation", messages.default, true, true);
    }

    await i18n.changeLanguage(lang);
}

const supportedLanguages = [
    "en",
    "ru",
    "pl",
    "de",
    "fr",
    "es",
    "it",
    "pt",
    "nl",
    "uk",
    "cz",
    "ja",
    "ko",
    "no",
    "sk",
    "sl",
    "sv",
    "zh"
];

export function preloadLanguages() {
    setTimeout(() => {
        const current = i18n.language.split("-")[0];

        supportedLanguages
            .filter((l) => l !== current)
            .forEach((lang) => {
                import(`./locales/${lang}/translation.json`).then((messages) => {
                    if (!i18n.hasResourceBundle(lang, "translation")) {
                        i18n.addResourceBundle(lang, "translation", messages.default, true, true);
                    }
                });
            });
    }, 5000); // ⏱ 5 seconds delay
}
export default i18n;
