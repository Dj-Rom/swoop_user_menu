import styles from "./../../styles/headers/welcomePageHeader.module.scss";
import { LanguageSwitcher } from "../UI/LanguageSwitcher";

type WelcomePageHeaderProps = {
    color?: string;
    un?: boolean;
    isInStore?: boolean;
};

export function WelcomePageHeader({ color, un }: WelcomePageHeaderProps) {
    return (
        <header className={un ? styles.un : styles.welcome_pag_header_header} style={{ color }}>
            <div className={styles.welcome_pag_header_div2}>
                <button className={styles.welcome_pag_header_button}>
                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <foreignObject x="-16" y="-16" width="76" height="76"></foreignObject>
                        <g data-figma-bg-blur-radius="16">
                            <path
                                d="M13.25 22C13.25 21.586 13.586 21.25 14 21.25H30C30.414 21.25 30.75 21.586 30.75 22C30.75 22.414 30.414 22.75 30 22.75H14C13.586 22.75 13.25 22.414 13.25 22ZM14 28.25H30C30.414 28.25 30.75 28.586 30.75 29C30.75 29.414 30.414 29.75 30 29.75H14C13.586 29.75 13.25 29.414 13.25 29C13.25 28.586 13.586 28.25 14 28.25ZM13.25 15C13.25 14.586 13.586 14.25 14 14.25H24C24.414 14.25 24.75 14.586 24.75 15C24.75 15.414 24.414 15.75 24 15.75H14C13.586 15.75 13.25 15.414 13.25 15Z"
                                fill={color}
                            />
                        </g>
                        <defs>
                            <clipPath id="bgblur_0_51_13467_clip_path" transform="translate(16 16)">
                                <path d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                {/* {isInStore ? (
                    <div className={styles.selectWrap}>
                        <select
                            name="orderType"
                            value={orderType}
                            onChange={(e) => setOrderType(e.target.value)}
                            className={styles.toGo_select}
                            style={{ height: 44, width: 120, color }}
                        >
                            <option value="nav.eat_in">{t("nav.eat_in")}</option>
                            <option value="nav.to_go">{t("nav.to_go")}</option>
                        </select>
                        <img
                            src={normalizeAssetPath("/assets/icons/arrow.svg")}
                            className={styles.selectSpan}
                        />
                    </div>
                ) : (
                    ""
                )} */}
                <LanguageSwitcher color={color} />
            </div>
        </header>
    );
}
