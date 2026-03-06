import { useEffect, useCallback } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const current = images[currentIndex]

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft')  onPrev()
  }, [onClose, onNext, onPrev])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!current) return null

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagen"
    >
      <div
        className={styles.box}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Image */}
        <img
          key={current.id}
          src={current.src}
          alt={current.alt}
          className={styles.img}
        />

        {/* Caption */}
        <p className={styles.caption}>{current.alt}</p>

        {/* Counter */}
        <span className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </span>

        {/* Prev */}
        {currentIndex > 0 && (
          <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={onPrev} aria-label="Imagen anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>
        )}

        {/* Next */}
        {currentIndex < images.length - 1 && (
          <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={onNext} aria-label="Siguiente imagen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
