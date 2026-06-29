import { useNavigate } from "react-router-dom";
import styles from "../../styles/UI/button.module.scss";
type ButtonProps = {
    path: string;
    text: string;
};

export function Button({ path, text }: ButtonProps) {
    const navigate = useNavigate();

    return (
        <button type="button" className={styles.button} onClick={() => navigate(path)}>
            {text}
        </button>
    );
}
