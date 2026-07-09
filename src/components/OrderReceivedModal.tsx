import { useRef, useState } from "react";
import styles from "../styles/orderReceivedModal.module.scss";
import { openModalCallWindow } from "../store/slices/modalCallWindow";
import { useDispatch } from "react-redux";
import { closeOrderReceivedModal } from "../store/slices/orderReceivedModalSlice";
import { useTranslation } from "react-i18next";
interface Props {
    onClose: () => void;
}

export function OrderReceivedModal({ onClose }: Props) {
    const sheetRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const name = "Maria";
    const onCallServer = () => {
        dispatch(closeOrderReceivedModal());
        dispatch(openModalCallWindow());
    };
    const startY = useRef(0);
    const [translateY, setTranslateY] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const delta = e.touches[0].clientY - startY.current;

        if (delta > 0) {
            setTranslateY(delta);
        }
    };

    const handleTouchEnd = () => {
        if (!sheetRef.current) return;

        const height = sheetRef.current.offsetHeight;
        const threshold = height * 0.15; // 15%

        if (translateY > threshold) {
            onClose();
        } else {
            setTranslateY(0);
        }
    };
    return (
        <div className={styles.overlay}>
            <div
                ref={sheetRef}
                className={styles.modal}
                style={{
                    transform: `translateY(${translateY}px)`,
                    transition: translateY === 0 ? "transform 250ms ease" : "none"
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className={styles.handle} />

                {/* "thankYou": "Děkujeme za vaši objednávku!",
    "serverReceived": "Váš číšník {{name}} obdržel vaši objednávku.",
    "questions": "Pokud máte nějaké otázky, můžete zavolat číšníka.",
    "callServer": "Přivolat číšníka",
    "gotIt": "Rozumím" */}

                <h2 className={styles.title}>{t("orderSuccess.thankYou")}</h2>

                <p className={styles.subtitle}>{t("orderSuccess.serverReceived", { name })}</p>

                <p className={styles.description}>{t("orderSuccess.questions")}</p>

                <button type="button" className={styles.secondaryButton} onClick={onCallServer}>
                    {t("orderSuccess.callServer")}
                </button>

                <button type="button" className={styles.primaryButton} onClick={onClose}>
                    {t("orderSuccess.gotIt")}
                </button>
            </div>
        </div>
    );
}
