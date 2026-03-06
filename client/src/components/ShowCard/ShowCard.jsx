import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import styles from './ShowCard.module.css'

export default function ShowCard({ show }) {
  const { t } = useLanguage()

  if (!show.active) {
    // Past show — card con link a detalles
    return (
      <article className={`${styles.card} ${styles.past}`}>
        <Link to={`/obras/${show.slug}`} className={styles.imgWrapper} aria-label={`Ver detalles de ${show.title}`}>
          <img src={show.image} alt={show.title} className={styles.img} loading="lazy" />
          <div className={styles.imgOverlay} />
        </Link>
        <div className={styles.body}>
          <h3 className={styles.title}>{show.title}</h3>
          <p className={styles.synopsis}>{show.synopsis}</p>
          <Link to={`/obras/${show.slug}`} className={`btn btn-outline ${styles.cta}`}>
            {t.shows.cta}
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className={styles.card}>
      <Link to={`/obras/${show.slug}`} className={styles.imgWrapper} aria-label={`Ver detalles de ${show.title}`}>
        <img src={show.image} alt={show.title} className={styles.img} loading="lazy" />
        <div className={styles.imgOverlay} />
        <span className={styles.activeTag}>En cartelera</span>
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>{show.title}</h3>
        {show.tagline && <p className={styles.tagline}>{show.tagline}</p>}
        <p className={styles.synopsis}>{show.synopsis.slice(0, 120)}…</p>
        <Link to={`/obras/${show.slug}`} className={`btn btn-outline ${styles.cta}`}>
          {t.shows.cta}
        </Link>
      </div>
    </article>
  )
}
