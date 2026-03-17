import styles from "./Modal.module.css";
import { useLanguage } from "../../context/LanguageContext";

import btnCloseIcon from "../../assets/icons/btn-close.svg";

function Modal({ isOpen, onClose }) {
    const { t } = useLanguage();
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your request has been sent");
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className={styles.close}
                    onClick={onClose}
                >
                    <img src={btnCloseIcon} alt="close" />
                </button>

                <h2 className={styles.title}>{t.modal.title}</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Phone"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <textarea
                        placeholder="Message"
                        rows="4"
                    />

                    <button
                        type="submit"
                        className={styles.submit}
                    >
                        Send request
                    </button>
                </form>

                <div className={styles.contactInfo}>
                    <p>{t.modal.text}</p>

                    <a href="tel:+48694751460">
                        +48 694 751 460
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Modal;