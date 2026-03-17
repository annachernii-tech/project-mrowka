import styles from "./Hero.module.css";
import heroImage from "../../assets/images/bg_hero.png";
import dividerFirst from "../../assets/images/divider-first.png";
import { useLanguage } from "../../context/LanguageContext";

function Hero({ openModal }) {

  const { t } = useLanguage();

  return (
    <section
      className={styles.hero}
      id="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container">

        <div className={styles.wrapper}>

          <h1>
            {t.hero.title1}
            <br />
            <span>{t.hero.title2}</span>
          </h1>

          <p>{t.hero.text}</p>

          <button
            className={styles.btn}
            onClick={openModal}
          >
            {t.hero.button}
          </button>

        </div>

      </div>

      <div
        className={styles.divider}
        style={{ backgroundImage: `url(${dividerFirst})` }}
      ></div>

    </section>
  );
}

export default Hero;