import { useLanguage } from '../../context/LanguageContext'
import styles from './PressCard.module.css'

const TYPE_ICONS = {
  article: '📰',
  review:  '✍️',
  video:   '▶️',
  social:  '🔗',
}

const TYPE_LABELS = {
  article: 'Artículo',
  review:  'Reseña',
  video:   'Video',
  social:  'Redes',
}

export default function PressCard({ item }) {
  const { t } = useLanguage()

  const date = new Date(item.date).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className={styles.card}>
      {/* Preview image */}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imgWrapper}
        tabIndex="-1"
        aria-hidden="true"
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className={styles.img}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderIcon} aria-hidden="true">
              {TYPE_ICONS[item.type] ?? '📰'}
            </span>
            <span className={styles.placeholderType}>
              {TYPE_LABELS[item.type] ?? 'Prensa'}
            </span>
          </div>
        )}
        {item.type === 'video' && (
          <div className={styles.playOverlay} aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="12" fillOpacity="0.7"/>
              <polygon points="10,8 18,12 10,16" fill="white"/>
            </svg>
          </div>
        )}
      </a>

      {/* Content */}
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.outlet}>{item.outlet}</span>
          <time className={styles.date} dateTime={item.date}>{date}</time>
        </div>
        <h3 className={styles.title}>{item.title}</h3>
        {item.summary && <p className={styles.summary}>{item.summary}</p>}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-ghost ${styles.cta}`}
          aria-label={`${t.press.read}: ${item.title}`}
        >
          {t.press.read}
        </a>
      </div>
    </article>
  )
}
