import styles from "./../../styles/headers/welcomePageHeader.module.scss";
import { LanguageSwitcher } from "../LanguageSwitcher";
import logo from "../../../public/assets/icons/Img_button_welcome_header.svg";
export function WelcomePageHeader() {
    return (
        <header className={styles.welcome_pag_header_header}>
            <div className={styles.welcome_pag_header_div}></div>
            <div className={styles.welcome_pag_header_div2}>
                <button className={styles.welcome_pag_header_button}>
                    <img src={logo} alt="" />
                </button>
                <LanguageSwitcher />
            </div>
        </header>
    );
}
