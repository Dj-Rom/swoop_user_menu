import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ArrowLeft from "../../public/assets/icons/Arrow left.svg";
import Trash from "../../public/assets/icons/Delete (2).svg";
import Minus from "../../public/assets/icons/minus.svg";
import Plus from "../../public/assets/icons/Plus.svg";
import { normalizeAssetPath } from "../utils/helpers";
import type { AppDispatch, RootState } from "../store/store";
import { OrderReceivedModal } from "../components/OrderReceivedModal";
import {
    removeFromOrder,
    incrementItemQty,
    decrementItemQty,
    selectTotalPrice
} from "../store/slices/orderSlice";
import {
    openOrderReceivedModal,
    closeOrderReceivedModal
} from "../store/slices/orderReceivedModalSlice";
import styles from "../styles/pages/orderPage.module.scss";
import { LanguageSwitcher } from "../components/UI/LanguageSwitcher";

export function OrderPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const items = useSelector((state: RootState) => state.order.items);
    const isOpen = useSelector((state: RootState) => state.orderReceivedModal.isOpen);
    const loading = useSelector((state: RootState) => state.order.loading);
    const error = useSelector((state: RootState) => state.order.error);
    const totalPrice = useSelector(selectTotalPrice);

    const handleSubmit = async () => {
        dispatch(openOrderReceivedModal());
    };

    return (
        <>
            <section className={styles.page}>
                {/* HEADER */}
                <header className={styles.header}>
                    <button
                        type="button"
                        aria-label="Go back"
                        className={styles.backBtn}
                        onClick={() => navigate(-1)}
                    >
                        <img src={ArrowLeft} />
                    </button>

                    <h1 className={styles.headerTitle}>{t("nav.yourOrder", "Your order")}</h1>

                    <LanguageSwitcher />
                </header>
                <h2 className={styles.pageTitle}>{t("nav.yourOrder")}</h2>
                {/* ITEMS */}
                {items.length === 0 ? (
                    <p className={styles.empty}>{t("order.empty", "Your order is empty")}</p>
                ) : (
                    <ul className={styles.list}>
                        {items.map((item, i) => (
                            <li key={item.id} className={styles.item}>
                                <span className={styles.index}>{i + 1}.</span>

                                <img
                                    src={normalizeAssetPath(item.photo)}
                                    alt={item.name}
                                    className={styles.thumb}
                                />

                                <div className={styles.info}>
                                    <p className={styles.name}>{t(item.name)}</p>

                                    <div className={styles.itemBottom}>
                                        <span className={styles.price}>{item.price} €</span>

                                        <div className={styles.controls}>
                                            <button
                                                type="button"
                                                aria-label="Remove item"
                                                className={styles.deleteBtn}
                                                onClick={() => dispatch(removeFromOrder(item.id))}
                                            >
                                                <img src={Trash} />
                                            </button>

                                            <div className={styles.qty}>
                                                <button
                                                    disabled={item.quantity < 2}
                                                    type="button"
                                                    aria-label="Decrease quantity"
                                                    onClick={() =>
                                                        dispatch(decrementItemQty(item.id))
                                                    }
                                                >
                                                    <img src={Minus} />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    aria-label="Increase quantity"
                                                    onClick={() =>
                                                        dispatch(incrementItemQty(item.id))
                                                    }
                                                >
                                                    <img src={Plus} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {/* BOTTOM BAR */}
                <div className={styles.bottomBar}>
                    {/* TOTAL */}
                    {items.length > 0 && (
                        <div className={styles.totalRow}>
                            <span>{t("nav.total")}</span>
                            <span>{totalPrice}€</span>
                        </div>
                    )}

                    {error && <p className={styles.error}>{error}</p>}
                    <button
                        type="button"
                        className={styles.addMoreBtn}
                        onClick={() => navigate("/menu")}
                    >
                        {t("nav.addMore")}
                    </button>

                    <button
                        type="button"
                        className={styles.orderBtn}
                        disabled={items.length === 0 || loading}
                        onClick={handleSubmit}
                    >
                        {loading ? t("order.submitting", "Sending...") : t("nav.order", "Order")}
                    </button>
                </div>
            </section>
            {isOpen && <OrderReceivedModal onClose={() => dispatch(closeOrderReceivedModal())} />}
        </>
    );
}
