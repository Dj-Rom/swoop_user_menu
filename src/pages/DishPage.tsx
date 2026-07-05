import { LanguageSwitcher } from "../components/UI/LanguageSwitcher";
import { ImageSlider } from "../components/UI/ImageSlider";
import { useNavigate, useParams } from "react-router-dom";
import { menuData } from "../data/menuData";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "../styles/pages/dishPage.module.scss";
import ArrowLeft from "../../public/assets/icons/Arrow left.svg";
import { useDispatch } from "react-redux";
import { addToOrder, setOrderInfo } from "../store/slices/orderSlice";
import Minus from "../../public/assets/icons/minus.svg";
import Plus from "../../public/assets/icons/Plus.svg";
export function DishPage() {
    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();

    if (!id) return null;

    const dish = Object.values(menuData)
        .flat()
        .find((d) => d.id === id);

    if (!dish) return <div>Dish not found</div>;

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <button
                    type="button"
                    aria-label="Go back"
                    className={styles.backBtn}
                    onClick={() => navigate(-1)}
                >
                    <img src={ArrowLeft} />
                </button>

                <LanguageSwitcher />
            </header>

            <div className={styles.l_image}>
                {" "}
                {/* IMAGE SLIDER */}
                <ImageSlider images={dish.photo} isDishCard={true} />
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
                <h2 className={styles.title}>{t(dish.nameKey)}</h2>

                <p className={styles.desc}>{t(dish.descriptionKey)}</p>

                {dish.tag && <span className={styles.tag}>{dish.tag}</span>}

                <p className={styles.price}>{dish.price} €</p>
            </div>

            {/* STICKY BOTTOM BAR */}
            <div className={styles.bottomBar}>
                <div className={styles.qty}>
                    <button disabled={qty < 2} onClick={() => setQty((q) => Math.max(1, q - 1))}>
                        <img src={Minus} />
                    </button>

                    <span>{qty}</span>

                    <button onClick={() => setQty((q) => q + 1)}>
                        <img src={Plus} />
                    </button>
                </div>

                <button
                    className={styles.addBtn}
                    onClick={() => {
                        // 1. optional: set cafe/table once (if needed)
                        dispatch(
                            setOrderInfo({
                                cafeId: "cafe-001",
                                tableNumber: 1
                            })
                        );

                        // 2. add item to store
                        dispatch(
                            addToOrder({
                                id: dish.id,
                                photo: dish.photo[0],
                                name: dish.nameKey,
                                price: dish.price,
                                quantity: qty
                            })
                        );

                        // 3. go back
                        navigate("/menu");
                    }}
                >
                    {t("nav.addToOrder")}{" "}
                    <span className={styles.totalPrice}>{dish.price * qty}€</span>
                </button>
            </div>
        </section>
    );
}
