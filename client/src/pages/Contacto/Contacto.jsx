import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Contacto.module.css";

export default function Contacto() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Contacto — Susi Estrada</title>
        <meta
          name="description"
          content="Contacta a Susi Estrada para colaboraciones, prensa o información sobre sus obras y proyectos."
        />
      </Helmet>

      <section className={`section ${styles.contacto}`}>
        <div className="container">
          <div className={styles.inner}>

            <div className={styles.header}>
              <span className="section-eyebrow">{t.contact.eyebrow}</span>
              <h1 className={`section-title ${styles.title}`}>
                {t.contact.title}
              </h1>
              <div className="section-divider" />
            </div>

            <div className={styles.body}>
              <p className={styles.message}>{t.contact.message}</p>

              <a
                href="https://www.instagram.com/sabrosa.teatro/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.igCard}
                aria-label="Instagram de Susi Estrada"
              >
                <span className={styles.igIcon} aria-hidden="true">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </span>
                <span className={styles.igInfo}>
                  <span className={styles.igHandle}>@sabrosa.teatro</span>
                  <span className={styles.igSub}>Instagram</span>
                </span>
                <span className={styles.igArrow} aria-hidden="true">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
