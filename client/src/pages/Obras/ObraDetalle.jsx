import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import { shows, pastShows } from '../../data/shows'
import { getActiveTemporadas, getExpiredTemporadas } from '../../utils/showUtils'
import styles from './ObraDetalle.module.css'

export default function ObraDetalle() {
  const { slug } = useParams()
  const { t } = useLanguage()

  const show = [...shows, ...pastShows].find((s) => s.slug === slug)

  if (!show) {
    return (
      <section className={`section ${styles.notFound}`}>
        <div className="container">
          <h1>Obra no encontrada</h1>
          <Link to="/obras" className="btn btn-outline" style={{ marginTop: '2rem' }}>
            ← Volver a Obras
          </Link>
        </div>
      </section>
    )
  }

  // Temporadas activas (endDate >= hoy o sin endDate)
  const temporadas = getActiveTemporadas(show)
  // Fechas anteriores = las ya vencidas de temporadas[] + todas las pastTemporadas[]
  const pastTemporadas = [
    ...getExpiredTemporadas(show),
    ...(show.pastTemporadas ?? []),
  ]

  return (
    <>
      <Helmet>
        <title>{show.title} — Susi Estrada</title>
        <meta name="description" content={show.synopsis.slice(0, 160)} />
      </Helmet>

      {/* Hero */}
      <div className={`${styles.hero} ${!show.heroImage ? styles.heroPlaceholder : ''}`}>
        {show.heroImage && (
          <>
            <img src={show.heroImage} alt={show.title} className={styles.heroImg} />
            <div className={styles.heroOverlay} />
          </>
        )}
        <div className={styles.heroContent}>
          {show.tagline && <p className={styles.tagline}>{show.tagline}</p>}
          <h1 className={styles.heroTitle}>{show.title}</h1>
          {!show.heroImage && <div className={styles.heroTitleLine} />}
        </div>
      </div>

      <section className={`section ${styles.detail}`}>
        <div className="container">
          <div className={styles.grid}>

            {/* ── Sinopsis + fechas anteriores ── */}
            <div className={styles.synopsis}>
              <span className="section-eyebrow">Sinopsis</span>
              <div className="section-divider" />
              {show.synopsis && (
                <p className={styles.synopsisText}>{show.synopsis}</p>
              )}
              {show.synopsisExtra && (
                <p className={styles.synopsisExtra}>{show.synopsisExtra}</p>
              )}
              {show.production && (
                <p className={styles.production}>{show.production}</p>
              )}

              {/* Video */}
              {show.video && (
                <div className={styles.videoWrapper}>
                  <video
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={show.video.webm} type="video/webm" />
                    <source src={show.video.mp4}  type="video/mp4" />
                  </video>
                </div>
              )}

              {/* Fechas anteriores */}
              {pastTemporadas.length > 0 && (
                <div className={styles.pastTemporadas}>
                  <span className={styles.pastEyebrow}>Fechas anteriores</span>
                  <div className={styles.pastList}>
                    {pastTemporadas.map((pt, i) => (
                      <div key={i} className={styles.pastItem}>
                        <span className={styles.pastLabel}>{pt.label}</span>
                        {pt.venue && (
                          <span className={styles.pastVenue}>
                            {pt.venue}
                            {pt.venueNote && ` · ${pt.venueNote}`}
                          </span>
                        )}
                        <span className={styles.pastDates}>{pt.dates}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Ficha técnica ── */}
            <aside className={styles.ficha}>
              <h2 className={styles.fichaTitle}>Ficha de la obra</h2>

              {/* Datos comunes */}
              {(show.dramaturgia || show.direccion || show.elenco || show.audience) && (
                <ul className={styles.fichaList}>
                  {show.dramaturgia && (
                    <li className={styles.fichaItem}>
                      <span className={styles.fichaLabel}>Dramaturgia</span>
                      <span className={styles.fichaValue}>{show.dramaturgia}</span>
                    </li>
                  )}
                  {show.direccion && (
                    <li className={styles.fichaItem}>
                      <span className={styles.fichaLabel}>Dirección</span>
                      <span className={styles.fichaValue}>{show.direccion}</span>
                    </li>
                  )}
                  {show.elenco && (
                    <li className={styles.fichaItem}>
                      <span className={styles.fichaLabel}>Elenco</span>
                      <span className={styles.fichaValue}>{show.elenco}</span>
                    </li>
                  )}
                  {show.audience && (
                    <li className={styles.fichaItem}>
                      <span className={styles.fichaLabel}>Público</span>
                      <span className={styles.fichaValue}>{show.audience}</span>
                    </li>
                  )}
                </ul>
              )}

              {/* Bloques de temporadas activas / próximas */}
              {temporadas.length > 0 && (
                <div className={styles.temporadasWrapper}>
                  {temporadas.map((t, i) => (
                    <div key={i} className={styles.temporadaBlock}>
                      <p className={styles.temporadaLabel}>{t.label}</p>
                      <ul className={styles.fichaList}>
                        {t.venue && (
                          <li className={styles.fichaItem}>
                            <span className={styles.fichaLabel}>Lugar</span>
                            <span className={styles.fichaValue}>
                              {t.venue}
                              {t.venueNote && <em className={styles.fichaNote}> {t.venueNote}</em>}
                            </span>
                          </li>
                        )}
                        {t.dates && (
                          <li className={styles.fichaItem}>
                            <span className={styles.fichaLabel}>Temporada</span>
                            <span className={styles.fichaValue}>{t.dates}</span>
                          </li>
                        )}
                        {t.schedule && (
                          <li className={styles.fichaItem}>
                            <span className={styles.fichaLabel}>Funciones</span>
                            <span className={styles.fichaValue}>{t.schedule}</span>
                          </li>
                        )}
                        {t.time && (
                          <li className={styles.fichaItem}>
                            <span className={styles.fichaLabel}>Horario</span>
                            <span className={styles.fichaValue}>{t.time}</span>
                          </li>
                        )}
                      </ul>
                      {t.ticketsUrl && (
                        <a
                          href={t.ticketsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn-primary ${styles.ticketBtn}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
                          </svg>
                          {t.calendar?.buy ?? t.calendar?.buy ?? 'Comprar boletos'}
                        </a>
                      )}
                      {t.reviewUrl && (
                        <a
                          href={t.reviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn-outline ${styles.ticketBtn}`}
                        >
                          Leer reseña
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Redes sociales */}
              {show.social && (show.social.instagram || show.social.facebook) && (
                <div className={styles.socialLinks}>
                  {show.social.instagram && (
                    <a
                      href={show.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      aria-label="Instagram"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                      </svg>
                      Instagram
                    </a>
                  )}
                  {show.social.facebook && (
                    <a
                      href={show.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      aria-label="Facebook"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                      Facebook
                    </a>
                  )}
                </div>
              )}

              <Link to="/obras" className={`btn btn-ghost ${styles.backBtn}`}>
                ← Otras obras
              </Link>
            </aside>
          </div>

          {/* Tags */}
          {show.tags && show.tags.length > 0 && (
            <div className={styles.tags}>
              {show.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
