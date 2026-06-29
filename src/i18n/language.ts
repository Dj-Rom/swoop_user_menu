export const setLanguage = (lang: string) => {
    localStorage.setItem("lang", lang);
};
export const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "pl", label: "Polski", flag: "🇵🇱" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "nl", label: "Nederlands", flag: "🇳🇱" },
    { code: "uk", label: "Українська", flag: "🇺🇦" }
];
