import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import Lightbox from '../../components/Lightbox/Lightbox'
import { galleryCategories, galleryImages } from '../../data/galeria'
import styles from './Galeria.module.css'

export default function Galeria() {
  const { t, lang } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = () => setLightboxIndex((i) => Math.max(0, i - 1))
  const goNext = () => setLightboxIndex((i) => Math.min(filtered.length - 1, i + 1))

  return (
    <>
      <Helmet>
        <title>Galería — Susi Estrada</title>
        <meta name="description" content="Galería de imágenes de las obras y proyectos de Susi Estrada: El Tren, La Profesora, S.A.B.R.O.S.A. y más." />
      </Helmet>

      <section className={`section ${styles.galeria}`}>
        <div className="container">
          <span className="section-eyebrow">{t.gallery.eyebrow}</span>
          <h1 className="section-title">{t.gallery.title}</h1>
          <div className="section-divider" />

          {/* Category filter */}
          <div className={styles.filters} role="tablist" aria-label="Filtrar galería por categoría">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
              >
                {lang === 'en' ? cat.labelEn : cat.label}
              </button>
            ))}
          </div>

          {/* Masonry-like grid */}
          <div className={styles.grid} role="list">
            {filtered.map((img, index) => (
              <button
                key={img.id}
                className={styles.cell}
                onClick={() => openLightbox(index)}
                aria-label={`Ver imagen: ${img.alt}`}
                role="listitem"
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  className={styles.thumb}
                  loading="lazy"
                />
                <div className={styles.cellOverlay} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  )
}
