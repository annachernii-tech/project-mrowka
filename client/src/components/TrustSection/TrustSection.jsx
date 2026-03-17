import styles from "./TrustSection.module.css";
import { useLanguage } from "../../context/LanguageContext";

import clockIcon from "../../assets/icons/clock-arrow.svg";
import autoIcon from "../../assets/icons/auto.svg";
import priceIcon from "../../assets/icons/priceconverter.svg";
import fuelIcon from "../../assets/icons/fuel.svg";
import serviceIcon from "../../assets/icons/car-service.svg";
import starsIcon from "../../assets/icons/stars.svg";

function TrustSection() {

    const { t } = useLanguage();

    return (
        <section id="trust" className={styles.trust}>
        <div className="container">

            <div className={styles.wrapper}>

            <h2>
                {t.trust.title1} <span>{t.trust.title2}</span>
            </h2>

            <p>{t.trust.text}</p>

            <div className={styles.grid}>

                <div className={styles.item}>
                    <img src={clockIcon} alt="clock" />
                    <p>{t.trust.items[0]}</p>
                </div>

                <div className={styles.item}>
                    <img src={autoIcon} alt="auto" />
                    <p>{t.trust.items[1]}</p>
                </div>

                <div className={styles.item}>
                    <img src={priceIcon} alt="price" />
                    <p>{t.trust.items[2]}</p>
                </div>

                <div className={styles.item}>
                    <img src={fuelIcon} alt="fuel" />
                    <p>{t.trust.items[3]}</p>
                </div>

                <div className={styles.item}>
                    <img src={serviceIcon} alt="service" />
                    <p>{t.trust.items[4]}</p>
                </div>

                <div className={styles.item}>
                    <img src={starsIcon} alt="stars" />
                    <p>{t.trust.items[5]}</p>
                </div>

            </div>

            </div>

        </div>
        </section>
    );
}

export default TrustSection;