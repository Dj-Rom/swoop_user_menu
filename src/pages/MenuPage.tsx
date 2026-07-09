import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { NavItem } from "../data/menuData";
import TopNav from "../components/menu/TopNav";
import CategoryBar from "../components/UI/CategoryBar";
import MenuSection from "../components/menu/MenuSection";
import { WelcomePageHeader } from "../components/headers/WelcomePageHeader";

import { navItems, categories, menuData } from "../data/menuData";
import type { Category } from "../data/menuData";
import { selectTotalPrice, selectOrderQuantity } from "../store/slices/orderSlice";

import styles from "../styles/menu.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function MenuPage() {
    const { t } = useTranslation();

    const total = useSelector(selectTotalPrice);
    const count = useSelector(selectOrderQuantity);
    const navigate = useNavigate();
    const [activeNavItem, setActiveNavItem] = useState<NavItem>(navItems[0]);
    const [activeCategory, setActiveCategory] = useState<Category>("category.Starters");
    const onCategorySelect = (category: Category) => {
        setActiveCategory(category);
    };
    useEffect(() => {
        scrollIntoView();
    }, [activeCategory]);
    const scrollIntoView = () => {
        const element = document.getElementById(activeCategory.split(".")[1]);
        if (!element) return;

        const top = element.getBoundingClientRect().top + window.scrollY - 164;

        window.scrollTo({
            top,
            behavior: "smooth"
        });
    };
    const visibleCategories = categories.filter((category) => menuData[category].length > 0);

    return (
        <>
            <WelcomePageHeader color="black" isInStore={true} />

            <div className={styles.menu_app}>
                <header className={styles.top_header}>
                    {/* NAV */}
                    <TopNav
                        items={navItems}
                        activeItem={activeNavItem}
                        onSelect={setActiveNavItem}
                        label={(key) => t(key)}
                    />

                    {/* CATEGORY */}
                    <CategoryBar
                        categories={categories}
                        activeCategory={activeCategory}
                        onSelect={onCategorySelect}
                    />
                </header>
                {/* MENU */}
                <main className={styles.menu_content}>
                    {visibleCategories.map((categoryKey) => (
                        <MenuSection
                            id={categoryKey.split(".")[1]}
                            key={categoryKey}
                            titleKey={t(categoryKey)}
                            dishes={menuData[categoryKey]}
                        />
                    ))}
                </main>
                {count > 0 && (
                    <footer className={styles.footer}>
                        <button
                            className={styles.footer_button}
                            onClick={() => {
                                console.log("fff");
                                navigate("/order");
                            }}
                        >
                            <span className={styles.footer_count}>{count}</span>
                            {t("nav.viewOrder") + " "}
                            <span className={styles.footer_price}>{total.toFixed(2)} €</span>
                        </button>
                    </footer>
                )}
            </div>
        </>
    );
}
