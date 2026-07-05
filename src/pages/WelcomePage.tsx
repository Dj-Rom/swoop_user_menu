import { useEffect } from "react";
import { WelcomePageHeader } from "../components/headers/WelcomePageHeader";
import styles from "../styles/pages/welcomePage.module.scss";
import { Button } from "../components/UI/Button";
import { useTranslation } from "react-i18next";
import { ImageSlider } from "../components/UI/ImageSlider";

export function WelcomePage() {
    const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    useEffect(() => {
        if (isIOS) {
            document.body.classList.add("ios");
            window.scrollTo(0, 0);
        }
    }, [isIOS]);

    const { t } = useTranslation();

    return (
        <section className={styles.welcome_page_section}>
            <WelcomePageHeader color="white" un={true} />
            <ImageSlider
                images={["public/assets/bg/img_welcome_page_bg.jpg", "public/assets/bg/b2.jpg"]}
            />
            <main className={styles.welcome_page_main}>
                <section className={styles.welcome_page_main_section}>
                    <h1>{t("welcomePage.hello")}</h1>
                    <span>{t("welcomePage.subtitle")}</span>
                </section>
            </main>

            <footer className={styles.welcome_page_footer}>
                <h3>{t("welcomePage.welcome")}</h3>

                <span>{t("welcomePage.description")}</span>

                <div>
                    <Button path="/menu" text={t("welcomePage.orderNow")} />
                </div>
            </footer>
        </section>
    );
}
