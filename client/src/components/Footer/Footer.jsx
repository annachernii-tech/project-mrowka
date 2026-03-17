import styles from "./Footer.module.css";
import { useLanguage } from "../../context/LanguageContext";

import footerBgImage from "../../assets/images/bg_footer.png";
import dividerSecond from "../../assets/images/divider-second.png";
import logo from "../../assets/logo/logo-mrowka.svg";

function Footer({openModal}) {
    const { t } = useLanguage();

    return (
        <footer
            id="contacts"
            className={styles.footer}
            style={{ backgroundImage: `url(${footerBgImage})` }}
        >
            <div
                className={styles.divider}
                style={{ backgroundImage: `url(${dividerSecond})` }}>
            </div>
            
            <div className="container">
                <div className={styles.wrapper}>
                    <h2>
                    {t.footer.title1} <span>{t.footer.title2}</span>
                    </h2>

                    <p>{t.footer.subtitle} </p>

                    <p className={styles.text}>
                         {t.footer.text}
                    </p>

                    <div className={styles.grid}>

                        <ul className={styles.nav}>
                            <li><a href="#trust">{t.footer.nav.about}</a></li>
                            <li><a href="#services">{t.footer.nav.services}</a></li>
                            <li><a href="#gallery">{t.footer.nav.gallery}</a></li>
                        </ul>

                        <div className={styles.contacts}>
                            <a className={styles.phone} href="tel:+48694751460">
                            +48 694 751 460
                            </a>

                            <button
                                className={styles.btn}
                                onClick={openModal}
                            >{t.footer.button}
                            </button>
                        </div>

                        <ul className={styles.social}>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">Whatsapp</a></li>
                        </ul>
                    </div>

                    <div className={styles.logoImg}>  
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                Copyright © 2024. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;