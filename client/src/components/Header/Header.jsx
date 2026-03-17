import styles from "./Header.module.css";
import logo from "../../assets/logo/logo-mrowka.svg";
import { useLanguage } from "../../context/LanguageContext";

function Header() {

  const { lang, setLang, t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className="container">

        <div className={styles.wrapper}>

          <div className={styles.logo}>
            <a href="#hero">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <nav className={styles.nav}>
            <a href="#services" className={styles.active}>
              {t.header.services}
            </a>

            <a href="#gallery">
              {t.header.gallery}
            </a>

            <a href="#contacts">
              {t.header.contacts}
            </a>
          </nav>

          <div>
            <a className={styles.phone} href="tel:+48694751460">
              +48 694 751 460
            </a>
          </div>

          <div className={styles.langSwitcher}>
            <button
              className={`${styles.langBtn} ${lang === "pl" ? styles.langActive : ""}`}
              onClick={() => setLang("pl")}
            >
              PL
            </button>

            <span className={styles.dividerBtn}>|</span>

            <button
              className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          <button className={styles.burger}>☰</button>

        </div>

      </div>
    </header>
  );
}

export default Header;