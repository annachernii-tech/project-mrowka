import styles from "./Services.module.css";
import { useLanguage } from "../../context/LanguageContext";

import servicesBgImage from "../../assets/images/bg_service.png";
import servicesImage from "../../assets/images/img_service.png";
import checkmarkIcon from "../../assets/icons/checkmark.svg";

function Services({ openModal }) {

    const { t } = useLanguage();

    return (
        <section
        id="services"
        className={styles.services}
        style={{ backgroundImage: `url(${servicesBgImage})` }}
        >

        <div className="container">

            <div className={styles.wrapper}>

            <div className={styles.imgService}>
                <img src={servicesImage} alt="Tow truck service" />
            </div>

            <div className={styles.content}>

                <h2>
                {t.services.title1} <span>{t.services.title2}</span>
                </h2>

                <p>{t.services.text}</p>

                <ul>
                <li>
                    <img src={checkmarkIcon} alt="checkmark" />
                    {t.services.list[0]}
                </li>

                <li>
                    <img src={checkmarkIcon} alt="checkmark" />
                    {t.services.list[1]}
                </li>

                <li>
                    <img src={checkmarkIcon} alt="checkmark" />
                    {t.services.list[2]}
                </li>

                <li>
                    <img src={checkmarkIcon} alt="checkmark" />
                    {t.services.list[3]}
                </li>

                <li>
                    <img src={checkmarkIcon} alt="checkmark" />
                    {t.services.list[4]}
                </li>
                </ul>

                <button
                className={styles.btn}
                onClick={openModal}
                >
                {t.services.button}
                </button>

            </div>

            </div>

        </div>

        </section>
    );
}

export default Services;