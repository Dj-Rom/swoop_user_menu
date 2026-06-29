import { useTranslation } from "react-i18next";
import { languages } from "../i18n/language";
import { setLanguage } from "../i18n/language";
import styles from "../styles/UI/language.module.scss";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    return (
        <select
            value={i18n.language}
            style={{ height: "44px" }}
            onChange={(e) => changeLang(e.target.value)}
            className={styles.lang_select}
        >
            {languages.map((l) => (
                <option key={l.code} value={l.code}>
                    {l.flag}
                </option>
            ))}
        </select>
    );
}
