import { useTranslation } from "react-i18next";
import styles from "../../styles/menu.module.scss";
import type { DishCardProps } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { normalizeAssetPath } from "../../utils/helpers";
function cx(...classes: Array<string | false | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export function DishCard({ photo, nameKey, descriptionKey, tag, price, id }: DishCardProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const currencyMap: Record<string, string> = {
        en: "€",
        pl: "zł",
        ru: "₽",
        uk: "₴",
        es: "€",
        fr: "€",
        de: "€",
        it: "€",
        pt: "€",
        nl: "€"
    };

    return (
        <article className={styles.dish_card} onClick={() => navigate(`/dish/${id}`)}>
            {Array.isArray(photo) ? (
                <img
                    decoding="async"
                    className={styles.dish_photo}
                    src={normalizeAssetPath(photo[0])}
                    alt={t(nameKey)}
                />
            ) : (
                <img
                    decoding="async"
                    className={styles.dish_photo}
                    src={normalizeAssetPath(photo)}
                    alt={t(nameKey)}
                />
            )}
            <div className={styles.dish_info}>
                <h3 className={styles.dish_name}>{t(nameKey)}</h3>

                <p className={cx(styles.dish_desc, !tag && styles.isShortText)}>
                    {t(descriptionKey)}
                </p>

                {tag && <span className={styles.tag}>{tag}</span>}

                <p className={styles.dish_price}>
                    {price}
                    {currencyMap["en"]}
                </p>
            </div>
        </article>
    );
}
