import { useState, useEffect, useRef } from "react";
import styles from "../../styles/UI/imageSlider.module.scss";
import { normalizeAssetPath } from "../../utils/helpers";

type Props = {
    images: string | string[];
    alt?: string;
    isDishCard?: boolean;
};

export function ImageSlider({ images, alt = "", isDishCard }: Props) {
    const [index, setIndex] = useState(0);
    const startX = useRef(0);

    const imgs = (Array.isArray(images) ? images : [images])
        .map(normalizeAssetPath)
        .filter(Boolean);
    useEffect(() => {
        setIndex(0);
    }, [images]);

    useEffect(() => {
        if (imgs.length <= 1) return;

        const nextIndex = index + 1;

        if (nextIndex < imgs.length) {
            const img = new Image();
            img.src = imgs[nextIndex];
        }
    }, [index, imgs]);

    useEffect(() => {
        setIndex(0);
    }, [images]);

    if (imgs.length === 0) return null;

    const next = () => {
        setIndex((prev) => (prev < imgs.length - 1 ? prev + 1 : prev));
    };

    const prev = () => {
        setIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX.current - endX;

        if (diff > 50) next(); // swipe left
        if (diff < -50) prev(); // swipe right
    };

    return !isDishCard ? (
        <div className={styles.slider} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <img src={imgs[index]} alt={alt} className={styles.image} />

            {imgs.length > 1 && (
                <div className={styles.dots}>
                    {imgs.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`${styles.dot} ${i === index ? styles.active : ""}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    ) : (
        <div className={styles.sliderDish} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <img src={imgs[index]} alt={alt} className={styles.imageDish} />

            {imgs.length > 1 && (
                <div className={styles.dotsDish}>
                    {imgs.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`${styles.dot} ${i === index ? styles.active : ""}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
