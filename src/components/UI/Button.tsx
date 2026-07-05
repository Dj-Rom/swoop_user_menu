import { useNavigate } from "react-router-dom";
import styles from "../../styles/UI/button.module.scss";
type ButtonProps = {
    path: string;
    text: string;
};

export function Button({ path, text }: ButtonProps) {
    const navigate = useNavigate();
    const isFullscreenSupported = document.documentElement.requestFullscreen !== undefined;
    return (
        <button
            type="button"
            className={styles.button}
            onClick={() => {
                navigate(path);
                isFullscreenSupported ? document.documentElement.requestFullscreen() : "";
            }}
        >
            {text}
        </button>
    );
}
