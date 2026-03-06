import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Acerca.module.css";
import portrait from "../../assets/SABROSA.webp";

const TICKER_ITEMS = [
  "Festival Internacional Cervantino",
  "Chicago International Latino Theatre Festival",
  "Festival Sor Juana · Chicago",
  "Teatro El Galeón",
  "Sistema de Apoyos a la Creación y Proyectos Culturales (Creadores Escénicos 2022–2023)",
  "ENARTES México",
  "Alma Arte Escénico",
  "En Su Tinta Producciones",
  "INBA",
  "Teatro UNAM",
];

export default function Acerca() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const tickerDouble = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      <Helmet>
        <title>Acerca — Susi Estrada</title>
        <meta
          name="description"
          content="Susi Estrada es creadora escénica, actriz, productora ejecutiva y gestora cultural con más de una década de trayectoria en las artes escénicas."
        />
      </Helmet>

      <section className={`section ${styles.acerca}`}>
        <div className="container">
          <span className="section-eyebrow">{t.about.eyebrow}</span>

          <div className={styles.grid}>
            {/* Imagen */}
            <div className={styles.imageCol}>
              <div className={styles.imageFrame}>
                <img
                  src={portrait}
                  alt="Susi Estrada — retrato"
                  className={styles.portrait}
                />
                <div className={styles.imageBorder} aria-hidden="true" />
              </div>
            </div>

            {/* Bio */}
            <div className={styles.bioCol}>
              <h1 className={`section-title ${styles.name}`}>
                {t.about.title}
              </h1>
              <div className="section-divider" />

              {/* Primer párrafo — siempre visible */}
              <p className={styles.bioParagraph}>{t.about.bios[0]}</p>

              {/* Botón Ver más / Ver menos */}
              <button
                className={styles.verMas}
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
              >
                <span>{expanded ? "Ver menos" : "Ver más"}</span>
                <svg
                  className={`${styles.verMasIcon} ${expanded ? styles.verMasIconUp : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </button>

              {/* Párrafos restantes — expandibles */}
              <div
                className={`${styles.bioContent} ${expanded ? styles.bioContentOpen : ""}`}
              >
                {t.about.bios.slice(1).map((paragraph, i) => (
                  <p key={i} className={styles.bioParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats — siempre visibles */}
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>10+</span>
                  <span className={styles.statLabel}>Años de trayectoria</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statNum}>30+</span>
                  <span className={styles.statLabel}>Proyectos escénicos</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statNum}>3</span>
                  <span className={styles.statLabel}>Países</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker — siempre visible */}
        <div className={styles.tickerOuter}>
          <div className={styles.tickerTrack}>
            {tickerDouble.map((item, i) => (
              <span key={i} className={styles.tickerItem}>
                {item}
                <span className={styles.tickerDot}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
