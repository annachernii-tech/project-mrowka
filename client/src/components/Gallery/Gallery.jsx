import styles from "./Gallery.module.css";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

import foto1Image from "../../assets/gallery/foto_1.jpg";
import foto2Image from "../../assets/gallery/foto_2.jpg";
import foto3Image from "../../assets/gallery/foto_3.jpg";
import foto4Image from "../../assets/gallery/foto_4.jpg";
import foto5Image from "../../assets/gallery/foto_5.jpg";
import foto6Image from "../../assets/gallery/foto_6.jpg";
import foto7Image from "../../assets/gallery/foto_7.jpg";
import foto8Image from "../../assets/gallery/foto_8.jpg";


function Gallery() {
    const { t } = useLanguage();
    const [activeImage, setActiveImage] = useState(null);

    return (
        <section id="gallery" className={styles.gallery}>
            <div className="container">
                <div className={styles.grid}>

                    <div className={styles.item}>
                        <h2>{t.gallery.title1} <span>{t.gallery.title2}</span></h2>
                        <p>{t.gallery.text}</p>
                    </div>

                    <div className={styles.item} onClick={() => setActiveImage(foto1Image)}>
                        <img src={foto1Image} alt="Fast arrival" />
                    </div>

                     <div className={styles.item} onClick={() => setActiveImage(foto2Image)}>
                        <img src={foto2Image} alt="Fast arrival" />
                    </div>

                     <div className={styles.item} onClick={() => setActiveImage(foto3Image)}>
                        <img src={foto3Image} alt="Fast arrival" />
                    </div>

                    <div className={styles.item} onClick={() => setActiveImage(foto4Image)}>
                        <img src={foto4Image} alt="Fast arrival" />
                    </div>

                     <div className={styles.item} onClick={() => setActiveImage(foto5Image)}>
                        <img src={foto5Image} alt="Fast arrival" />
                    </div>

                     <div className={styles.item} onClick={() => setActiveImage(foto6Image)}>
                        <img src={foto6Image} alt="Fast arrival" />
                    </div>

                    <div className={styles.item} onClick={() => setActiveImage(foto7Image)}>
                        <img src={foto7Image} alt="Fast arrival" />
                    </div>

                     <div className={styles.item} onClick={() => setActiveImage(foto8Image)}>
                        <img src={foto8Image} alt="Fast arrival" />
                    </div>
                </div>

                  <GalleryModal
                    image={activeImage}
                    onClose={() => setActiveImage(null)}
                />
            </div>
        </section>
    );
}

export default Gallery;