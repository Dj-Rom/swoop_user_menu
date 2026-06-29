import { WelcomePageHeader } from "../components/headers/WelcomePageHeader";
import styles from "../styles/pages/welcomePage.module.scss";
import { Button } from "../components/UI/Button";
export function WelcomePage() {
    return (
        <section className={styles.welcome_page_section}>
            <WelcomePageHeader />
            <main className={styles.welcome_page_main}>
                <section className={styles.welcome_page_main_section}>
                    <h1>HELLO</h1>
                    <span>Discover fresh flavors and unforgettable dining experiences.</span>
                </section>
            </main>
            <footer className={styles.welcome_page_footer}>
                <h3>Welcome</h3>
                <span>
                    Enjoy handcrafted dishes made with fresh ingredients in a warm and inviting
                    atmosphere. Order your favorites in just a few taps.
                </span>
                <div>
                    {" "}
                    <Button path="/home" text="Order now" />
                </div>
            </footer>
        </section>
    );
}
