import { useTranslation } from "react-i18next";
import { languages } from "../../i18n/language";
import { setLanguage } from "../../i18n/language";
import styles from "../../styles/UI/language.module.scss";
import { useRef } from "react";
type LanguageSwitcherProps = {
    color?: string;
};
export function LanguageSwitcher({ color }: LanguageSwitcherProps) {
    const { i18n } = useTranslation();

    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };
    const selectRef = useRef<HTMLSelectElement>(null);

    const handleClick = () => {
        selectRef.current?.focus();
        selectRef.current?.click();
    };

    return (
        <div className={styles.wrapLanguage} style={{ color }} onClick={handleClick}>
            <select
                ref={selectRef}
                style={{ color }}
                name="language"
                value={i18n.language.split("-")[0]}
                onChange={(e) => changeLang(e.target.value)}
                className={styles.lang_select}
            >
                {languages.map((l) => (
                    <option key={l.code} value={l.code}>
                        {l.code.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}
