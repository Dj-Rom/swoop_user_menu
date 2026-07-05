import { useTranslation } from "react-i18next";
import { DishCard } from "./DishCard";
import styles from "../../styles/menu.module.scss";

type Dish = {
    id: string;
    photo: string | string[];
    nameKey: string;
    descriptionKey: string;
    tag?: string;
    price: string | number;
};

type MenuSectionProps = {
    titleKey: string;
    dishes: Dish[];
    id: string;
};

function MenuSection({ titleKey, dishes, id }: MenuSectionProps) {
    const { t } = useTranslation();

    return (
        <section className={styles.menu_section} id={id}>
            <h2 className={styles.section_title}>{t(titleKey)}</h2>

            {dishes.map((dish) => (
                <DishCard key={dish.id} {...dish} />
            ))}
        </section>
    );
}

export default MenuSection;
