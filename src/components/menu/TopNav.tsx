import styles from "../../styles/menu.module.scss";

import type { NavItem } from "../../data/menuData";

type TopNavProps = {
    items: readonly NavItem[];
    activeItem: NavItem;
    onSelect: (item: NavItem) => void;
    label: (key: NavItem) => string;
};

function TopNav({ items, activeItem, onSelect, label }: TopNavProps) {
    return (
        <nav className={styles.top_nav}>
            {items.map((item) => (
                <button
                    key={item}
                    type="button"
                    className={`${styles.nav_link} ${item === activeItem ? styles.active : ""}`}
                    onClick={() => onSelect(item)}
                >
                    {label(item)}
                </button>
            ))}
        </nav>
    );
}

export default TopNav;
