import { useRef, useState } from "react";
import styles from "../styles/orderReceivedModal.module.scss";
import { openModalCallWindow } from "../store/slices/ModalCallWindow";
import { useDispatch } from "react-redux";
import { closeOrderReceivedModal } from "../store/slices/orderReceivedModalSlice";
interface Props {
    onClose: () => void;
}

export function OrderReceivedModal({ onClose }: Props) {
    const sheetRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const serverName = "Maria";
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

                <h2 className={styles.title}>Thank you for your order!</h2>

                <p className={styles.subtitle}>
                    Your server <strong>{serverName}</strong> has received your order.
                </p>

                <p className={styles.description}>
                    If you have any questions, feel free to call your server.
                </p>

                <button type="button" className={styles.secondaryButton} onClick={onCallServer}>
                    Call server
                </button>

                <button type="button" className={styles.primaryButton} onClick={onClose}>
                    Got it
                </button>
            </div>
        </div>
    );
}
