import styles from "./GalleryModal.module.css";

function GalleryModal({ image, onClose }) {

    if (!image) return null;

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
            ×
            </button>

            <img src={image} alt="gallery" />

        </div>

        </div>
    );
}

export default GalleryModal;