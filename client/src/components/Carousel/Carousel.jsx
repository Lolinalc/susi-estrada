import { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Carousel.module.css";
import sabrosa1 from "../../assets/SABROSA.webp";
import sabrosa3 from "../../assets/SABROSA_3.webp";
import sabrosa4 from "../../assets/SABROSA_4.webp";
import womanWashing from "../../assets/WomanWashing2.jpg";
import enEscena from "../../assets/SusiEnEscena.jpg";
import retradoBN from "../../assets/SusiRetratoBN.jpg";
import retratoColor from "../../assets/SusiRetratoColor.jpg";

const SLIDES = [
  {
    id: 1,
    image: sabrosa1,
    alt: "Susi Estrada — S.A.B.R.O.S.A.",
    position: "50% 20%", // opciones: top | center | bottom | "50% 20%"
  },
  {
    id: 2,
    image: womanWashing,
    alt: "Susi Estrada — Woman Washing",
    position: "center%", // opciones: top | center | bottom | "50% 20%"
  },
  {
    id: 3,
    image: sabrosa3,
    alt: "Susi Estrada — S.A.B.R.O.S.A.",
    position: "50% 20%",
  },
  {
    id: 4,
    image: retradoBN,
    alt: "Susi Estrada — Retrato en blanco y negro",
    position: "50% 20%",
  },
  {
    id: 5,
    image: enEscena,
    alt: "Susi Estrada — En Escena",
    position: "50% 20%",
  },
  {
    id: 6,
    image: sabrosa4,
    alt: "Susi Estrada — S.A.B.R.O.S.A.",
    position: "50% 20%",
  },
  {
    id: 7,
    image: retratoColor,
    alt: "Susi Estrada — Retrato en color",
    position: "50% 20%",
  },
];

const AUTOPLAY_MS = 10000;

export default function Carousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loaded, setLoaded] = useState(() => new Set([0]));
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    const next = ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;
    setCurrent(next);
    setLoaded((prev) => new Set([...prev, next]));
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [next, isPaused]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Preload adjacent images
  useEffect(() => {
    setLoaded(
      (prev) =>
        new Set([
          ...prev,
          (current + 1) % SLIDES.length,
          (current - 1 + SLIDES.length) % SLIDES.length,
        ]),
    );
  }, [current]);

  return (
    <section
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      aria-label="Galería principal de Susi Estrada"
      aria-roledescription="carrusel"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
          aria-hidden={i !== current}
        >
          {loaded.has(i) && (
            <img
              src={slide.image}
              alt={slide.alt}
              className={styles.img}
              style={{ objectPosition: slide.position || "center" }}
              draggable={false}
            />
          )}
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Hero text */}
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          SUSI
          <br />
          ESTRADA
        </h1>
        <p className={styles.tagline}>{t.home.tagline}</p>
        <div className={styles.titleLine} />
      </div>

      {/* Prev / Next arrows */}
      <button
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={prev}
        aria-label="Imagen anterior"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={next}
        aria-label="Siguiente imagen"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div
        className={styles.dots}
        role="tablist"
        aria-label="Navegación del carrusel"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Imagen ${i + 1} de ${SLIDES.length}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!isPaused && (
        <div key={current} className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
          />
        </div>
      )}
    </section>
  );
}
