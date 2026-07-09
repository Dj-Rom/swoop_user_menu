import { useRef, useState } from "react";
import styles from "../styles/orderReceivedModal.module.scss";
import { useTranslation } from "react-i18next";
interface Props {
    onClose: () => void;
}
export function ModalCallWindow({ onClose }: Props) {
    const sheetRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

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
        const threshold = height * 0.15;

        if (translateY > threshold) {
            onClose();
        } else {
            setTranslateY(0);
        }
    };
    return (
        <>
            {" "}
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
                    <h2 className={styles.modalCallWindowh2}>{t("nav.callWaiter")}</h2>

                    <button type="button" className={styles.primaryButton} onClick={onClose}>
                        {t("nav.consultation")}
                    </button>

                    <button type="button" className={styles.primaryButton} onClick={onClose}>
                        {t("nav.payment")}
                    </button>

                    <button type="button" className={styles.primaryButton} onClick={onClose}>
                        {t("nav.additionToOrder")}
                    </button>
                    <button type="button" className={styles.primaryButton} onClick={onClose}>
                        {t("nav.other")}
                    </button>
                </div>
            </div>
        </>
    );
}
