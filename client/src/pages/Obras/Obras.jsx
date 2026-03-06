import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import ShowCard from '../../components/ShowCard/ShowCard'
import { shows, pastShows } from '../../data/shows'
import styles from './Obras.module.css'

export default function Obras() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>Obras — Susi Estrada</title>
        <meta name="description" content="Obras en cartelera y proyectos destacados de Susi Estrada: actriz, bailarina y productora." />
      </Helmet>

      <section className={`section ${styles.obras}`}>
        <div className="container">
          <span className="section-eyebrow">{t.shows.eyebrow}</span>
          <h1 className="section-title">{t.shows.title}</h1>
          <div className="section-divider" />

          {/* Active shows */}
          <div className={styles.activeGrid}>
            {shows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>

          {/* Past shows */}
          <div className={styles.pastSection}>
            <h2 className={styles.pastTitle}>{t.shows.other}</h2>
            <p className={styles.pastSub}>{t.shows.otherSub}</p>
            <div className={styles.pastGrid}>
              {pastShows.map((show) => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
