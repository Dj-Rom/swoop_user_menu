import { useTranslation } from "react-i18next";
import styles from "../../styles/menu.module.scss";
import type { Category } from "../../data/menuData";

type CategoryBarProps = {
    categories: readonly Category[];
    activeCategory: Category;
    onSelect: (category: Category) => void;
};

function CategoryBar({ categories, activeCategory, onSelect }: CategoryBarProps) {
    const { t } = useTranslation();

    return (
        <nav className={styles.category_bar} aria-label="Menu categories">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    className={`${styles.pill} ${category === activeCategory ? styles.active : ""}`}
                    onClick={() => onSelect(category)}
                >
                    {t(category)}
                </button>
            ))}
        </nav>
    );
}

export default CategoryBar;
