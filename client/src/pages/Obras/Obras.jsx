import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import ShowCard from '../../components/ShowCard/ShowCard'
import { shows, pastShows } from '../../data/shows'
import styles from './Obras.module.css'

const ALL_SHOWS = [...shows, ...pastShows]

function hasRole(show, area) {
  if (area === 'todas') return true
  const role = show.role
  if (Array.isArray(role)) return role.includes(area)
  return role === area
}

export default function Obras() {
  const { t } = useLanguage()
  const [area, setArea] = useState('todas')
  const [status, setStatus] = useState('todas')

  // Filtros definidos con traducciones
  const AREA_FILTERS = [
    { value: 'todas',     label: t.shows.filterAll },
    { value: 'actriz',    label: t.shows.filterActriz },
    { value: 'produccion',label: t.shows.filterProduccion },
  ]

  const STATUS_FILTERS = [
    { value: 'todas',  label: t.shows.filterAll },
    { value: 'activa', label: t.shows.filterActive },
    { value: 'pasada', label: t.shows.filterPast },
  ]

  const filtered = useMemo(() => {
    return ALL_SHOWS.filter((show) => {
      const areaMatch = hasRole(show, area)
      const statusMatch =
        status === 'todas' ||
        (status === 'activa' ? show.active : !show.active)
      return areaMatch && statusMatch
    })
  }, [area, status])

  const activeFiltered = filtered.filter((s) => s.active)
  const pastFiltered = filtered.filter((s) => !s.active)
  const totalCount = filtered.length

  return (
    <>
      <Helmet>
        <title>Obras — Susi Estrada</title>
        <meta
          name="description"
          content="Obras en cartelera y proyectos destacados de Susi Estrada: actriz, bailarina y productora."
        />
      </Helmet>

      <section className={`section ${styles.obras}`}>
        <div className="container">
          <span className="section-eyebrow">{t.shows.eyebrow}</span>
          <h1 className="section-title">{t.shows.title}</h1>
          <div className="section-divider" />

          {/* ── Filtros ── */}
          <div className={styles.filtersWrapper}>
            <div className={styles.filterGroups}>
              <div className={styles.filterGroup}>
                <span className={styles.filterLabel}>{t.shows.filterArea}</span>
                <div className={styles.pills}>
                  {AREA_FILTERS.map((f) => (
                    <button
                      key={f.value}
                      className={`${styles.pill} ${area === f.value ? styles.pillActive : ''}`}
                      onClick={() => setArea(f.value)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.filterGroup}>
                <span className={styles.filterLabel}>{t.shows.filterStatus}</span>
                <div className={styles.pills}>
                  {STATUS_FILTERS.map((f) => (
                    <button
                      key={f.value}
                      className={`${styles.pill} ${status === f.value ? styles.pillActive : ''}`}
                      onClick={() => setStatus(f.value)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <span className={styles.count}>
              {totalCount} {totalCount === 1 ? t.shows.countSingular : t.shows.countPlural}
            </span>
          </div>

          {/* ── Sin resultados ── */}
          {totalCount === 0 && (
            <div className={styles.empty}>
              <p>{t.shows.empty}</p>
            </div>
          )}

          {/* ── En cartelera ── */}
          {activeFiltered.length > 0 && (
            <div className={styles.activeGrid}>
              {activeFiltered.map((show) => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          )}

          {/* ── Pasadas ── */}
          {pastFiltered.length > 0 && (
            <div className={styles.pastSection}>
              {activeFiltered.length > 0 && (
                <>
                  <h2 className={styles.pastTitle}>{t.shows.other}</h2>
                  <p className={styles.pastSub}>{t.shows.otherSub}</p>
                </>
              )}
              <div className={styles.pastGrid}>
                {pastFiltered.map((show) => (
                  <ShowCard key={show.id} show={show} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
