import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import { events, formatEventDate } from '../../data/calendario'
import styles from './Calendario.module.css'

export default function Calendario() {
  const { t, lang } = useLanguage()
  const today = new Date().toISOString().split('T')[0]

  // Group events by month
  const grouped = events.reduce((acc, ev) => {
    const d = new Date(ev.date + 'T12:00:00')
    const key = d.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', {
      month: 'long',
      year: 'numeric',
    })
    if (!acc[key]) acc[key] = []
    acc[key].push(ev)
    return acc
  }, {})

  const hasEvents = events.length > 0

  return (
    <>
      <Helmet>
        <title>Calendario — Susi Estrada</title>
        <meta name="description" content="Próximas funciones y temporadas de Susi Estrada. El Tren en Teatro El Galeón, marzo–abril 2026." />
      </Helmet>

      <section className={`section ${styles.calendario}`}>
        <div className="container">
          <span className="section-eyebrow">{t.calendar.eyebrow}</span>
          <h1 className="section-title">{t.calendar.title}</h1>
          <div className="section-divider" />

          {!hasEvents ? (
            <p className={styles.empty}>{t.calendar.noEvents}</p>
          ) : (
            <div className={styles.months}>
              {Object.entries(grouped).map(([month, monthEvents]) => (
                <div key={month} className={styles.monthGroup}>
                  <h2 className={styles.monthLabel}>{month}</h2>
                  <div className={styles.eventList}>
                    {monthEvents.map((ev) => {
                      const fmt = formatEventDate(ev.date, lang)
                      const isPast = ev.date < today

                      return (
                        <article
                          key={ev.id}
                          className={`${styles.event} ${isPast ? styles.past : ''}`}
                        >
                          {/* Date block */}
                          <div className={styles.dateBlock} aria-hidden="true">
                            <span className={styles.dateDay}>{fmt.day}</span>
                            <span className={styles.dateWeekday}>{fmt.weekday.slice(0, 3)}</span>
                          </div>

                          {/* Info */}
                          <div className={styles.eventInfo}>
                            <h3 className={styles.showName}>{ev.show}</h3>
                            <div className={styles.eventMeta}>
                              <span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"/>
                                  <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                {ev.time.replace(':', ':')} hrs
                              </span>
                              <span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                                  <circle cx="12" cy="10" r="3"/>
                                </svg>
                                {ev.venue} — {ev.city}
                              </span>
                            </div>
                            {ev.notes && <p className={styles.notes}>{ev.notes}</p>}
                          </div>

                          {/* CTA */}
                          {!isPast && ev.ticketsUrl && (
                            <a
                              href={ev.ticketsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn btn-primary ${styles.ticketBtn}`}
                              aria-label={`Comprar boletos para ${ev.show} el ${fmt.day} de ${fmt.month}`}
                            >
                              {t.calendar.buy}
                            </a>
                          )}
                          {isPast && (
                            <span className={styles.pastBadge}>Finalizada</span>
                          )}
                        </article>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
