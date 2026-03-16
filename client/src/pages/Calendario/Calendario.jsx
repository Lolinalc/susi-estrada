import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import { events, formatEventDate } from '../../data/calendario'
import styles from './Calendario.module.css'

// ── Color map por obra ────────────────────────────────────────────────────────
const SHOW_COLORS = {
  'El Tren':       '#4ade80',
  'S.A.B.R.O.S.A.': '#f472b6',
  'Mujer Tierra':  '#fb923c',
  'Woman Washing': '#60a5fa',
  'Las Justas':    '#c084fc',
  'Gritadero':     '#2dd4bf',
}

function getShowColor(showName) {
  for (const [key, color] of Object.entries(SHOW_COLORS)) {
    if (showName.startsWith(key)) return color
  }
  return '#4ade80'
}

// ── Construir cuadrícula para un mes dado ─────────────────────────────────────
function buildGrid(year, month, allEvents) {
  const firstDay  = new Date(year, month, 1)
  const daysTotal = new Date(year, month + 1, 0).getDate()
  const startDow  = firstDay.getDay() // 0 = Dom

  const cells = []
  for (let i = 0; i < startDow; i++) cells.push(null)
  for (let d = 1; d <= daysTotal; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    cells.push({ day: d, dateStr, evs: allEvents.filter(ev => ev.date === dateStr) })
  }
  return cells
}

const DOW_ES    = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const DOW_EN    = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December']

// ── Componente principal ──────────────────────────────────────────────────────
export default function Calendario() {
  const { t, lang } = useLanguage()
  const today = new Date().toISOString().split('T')[0]

  const [vista, setVista]       = useState('lista')
  const now = new Date()
  const [gridYear,  setGridYear]  = useState(now.getFullYear())
  const [gridMonth, setGridMonth] = useState(now.getMonth())
  const [selectedDate, setSelectedDate] = useState(null)

  // Eventos ordenados por fecha
  const sorted = useMemo(
    () => [...events].sort((a, b) => a.date.localeCompare(b.date)),
    []
  )

  // Solo eventos futuros (para la vista lista — los pasados desaparecen)
  const upcoming = useMemo(
    () => sorted.filter(ev => ev.date >= today),
    [sorted, today]
  )

  // Agrupar por mes (vista lista) — solo próximas funciones
  const grouped = useMemo(() => {
    return upcoming.reduce((acc, ev) => {
      const d = new Date(ev.date + 'T12:00:00')
      const key = d.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', {
        month: 'long', year: 'numeric',
      })
      if (!acc[key]) acc[key] = []
      acc[key].push(ev)
      return acc
    }, {})
  }, [upcoming, lang])

  // Cuadrícula del mes activo
  const grid = useMemo(
    () => buildGrid(gridYear, gridMonth, sorted),
    [gridYear, gridMonth, sorted]
  )

  const prevMonth = () => {
    if (gridMonth === 0) { setGridYear(y => y - 1); setGridMonth(11) }
    else setGridMonth(m => m - 1)
    setSelectedDate(null)
  }
  const nextMonth = () => {
    if (gridMonth === 11) { setGridYear(y => y + 1); setGridMonth(0) }
    else setGridMonth(m => m + 1)
    setSelectedDate(null)
  }

  const hasEvents      = upcoming.length > 0
  const DOW            = lang === 'es' ? DOW_ES : DOW_EN
  const MONTHS         = lang === 'es' ? MONTHS_ES : MONTHS_EN
  const selectedEvents = selectedDate ? sorted.filter(ev => ev.date === selectedDate) : []

  return (
    <>
      <Helmet>
        <title>Calendario — Susi Estrada</title>
        <meta name="description" content="Próximas funciones y temporadas de Susi Estrada." />
      </Helmet>

      <section className={`section ${styles.calendario}`}>
        <div className="container">
          <span className="section-eyebrow">{t.calendar.eyebrow}</span>
          <h1 className="section-title">{t.calendar.title}</h1>
          <div className="section-divider" />

          {/* ── Toggle de vista ─────────────────────────── */}
          <div className={styles.viewToggle}>
            <button
              className={`${styles.toggleBtn} ${vista === 'lista' ? styles.toggleActive : ''}`}
              onClick={() => setVista('lista')}
              aria-pressed={vista === 'lista'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
              {lang === 'es' ? 'Lista' : 'List'}
            </button>
            <button
              className={`${styles.toggleBtn} ${vista === 'cuadricula' ? styles.toggleActive : ''}`}
              onClick={() => setVista('cuadricula')}
              aria-pressed={vista === 'cuadricula'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
              </svg>
              {lang === 'es' ? 'Mes' : 'Month'}
            </button>
          </div>

          {!hasEvents ? (
            <p className={styles.empty}>{t.calendar.noEvents}</p>

          ) : vista === 'lista' ? (

            /* ════════════════ VISTA LISTA ════════════════ */
            <div className={styles.months}>
              {Object.entries(grouped).map(([month, monthEvents]) => (
                <div key={month} className={styles.monthGroup}>
                  <h2 className={styles.monthLabel}>{month}</h2>
                  <div className={styles.eventList}>
                    {monthEvents.map((ev) => {
                      const fmt    = formatEventDate(ev.date, lang)
                      const isPast = ev.date < today
                      return (
                        <article
                          key={ev.id}
                          className={`${styles.event} ${isPast ? styles.past : ''}`}
                          style={{ borderLeftColor: getShowColor(ev.show) }}
                        >
                          <div className={styles.dateBlock} aria-hidden="true">
                            <span className={styles.dateDay}>{fmt.day}</span>
                            <span className={styles.dateWeekday}>{fmt.weekday.slice(0, 3)}</span>
                          </div>
                          <div className={styles.eventInfo}>
                            <h3 className={styles.showName}>{ev.show}</h3>
                            <div className={styles.eventMeta}>
                              {ev.time && (
                                <span>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                                  </svg>
                                  {ev.time} hrs
                                </span>
                              )}
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
                          {!isPast && ev.ticketsUrl && (
                            <a href={ev.ticketsUrl} target="_blank" rel="noopener noreferrer"
                               className={`btn btn-primary ${styles.ticketBtn}`}
                               aria-label={`Comprar boletos para ${ev.show} el ${fmt.day} de ${fmt.month}`}>
                              {t.calendar.buy}
                            </a>
                          )}
                          {isPast && (
                            <span className={styles.pastBadge}>
                              {lang === 'es' ? 'Finalizada' : 'Ended'}
                            </span>
                          )}
                        </article>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

          ) : (

            /* ════════════════ VISTA CUADRÍCULA ════════════════ */
            <div className={styles.gridView}>

              {/* Navegación de mes */}
              <div className={styles.gridNav}>
                <button className={styles.navBtn} onClick={prevMonth} aria-label="Mes anterior">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"/>
                  </svg>
                </button>
                <h2 className={styles.gridMonthTitle}>{MONTHS[gridMonth]} {gridYear}</h2>
                <button className={styles.navBtn} onClick={nextMonth} aria-label="Mes siguiente">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </button>
              </div>

              {/* Encabezados días de semana */}
              <div className={styles.gridHeader}>
                {DOW.map(d => <span key={d} className={styles.gridDow}>{d}</span>)}
              </div>

              {/* Celdas */}
              <div className={styles.gridCells}>
                {grid.map((cell, i) =>
                  cell === null ? (
                    <div key={`empty-${i}`} className={styles.gridCellEmpty} />
                  ) : (
                    <div
                      key={cell.dateStr}
                      className={[
                        styles.gridCell,
                        cell.evs.length > 0 ? styles.gridCellActive : '',
                        cell.dateStr === today ? styles.gridCellToday : '',
                        cell.dateStr === selectedDate ? styles.gridCellSelected : '',
                        cell.dateStr < today ? styles.gridCellPast : '',
                      ].join(' ')}
                      onClick={() =>
                        cell.evs.length > 0
                          ? setSelectedDate(d => d === cell.dateStr ? null : cell.dateStr)
                          : undefined
                      }
                      role={cell.evs.length > 0 ? 'button' : undefined}
                      tabIndex={cell.evs.length > 0 ? 0 : undefined}
                      aria-label={cell.evs.length > 0
                        ? `${cell.day}: ${cell.evs.map(e => e.show).join(', ')}`
                        : String(cell.day)}
                    >
                      {/* Número de día */}
                      <span className={`${styles.gridDayNum} ${cell.dateStr === today ? styles.gridDayToday : ''}`}>
                        {cell.day}
                      </span>

                      {/* Chips de eventos — visibles en desktop */}
                      {cell.evs.length > 0 && (
                        <div className={styles.gridEventChips}>
                          {cell.evs.map((ev, idx) => (
                            <div
                              key={idx}
                              className={styles.gridChip}
                              style={{
                                background: getShowColor(ev.show) + '22',
                                borderLeft: `2px solid ${getShowColor(ev.show)}`,
                              }}
                            >
                              {ev.time && (
                                <span className={styles.chipTime} style={{ color: getShowColor(ev.show) }}>
                                  {ev.time}
                                </span>
                              )}
                              <span className={styles.chipName}>{ev.show}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Puntos — visibles solo en móvil */}
                      {cell.evs.length > 0 && (
                        <div className={styles.gridDotsMobile}>
                          {cell.evs.slice(0, 3).map((ev, idx) => (
                            <span
                              key={idx}
                              className={styles.gridDot}
                              style={{ background: getShowColor(ev.show) }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Panel detalle del día seleccionado (móvil o clic adicional) */}
              {selectedDate && selectedEvents.length > 0 && (
                <div className={styles.dayDetail}>
                  <div className={styles.dayDetailHeader}>
                    <h3 className={styles.dayDetailTitle}>
                      {(() => {
                        const fmt = formatEventDate(selectedDate, lang)
                        return `${fmt.weekday}, ${fmt.day} de ${fmt.month}`
                      })()}
                    </h3>
                    <button className={styles.dayDetailClose} onClick={() => setSelectedDate(null)} aria-label="Cerrar">✕</button>
                  </div>
                  {selectedEvents.map(ev => (
                    <div key={ev.id} className={styles.dayDetailEvent} style={{ borderLeftColor: getShowColor(ev.show) }}>
                      <p className={styles.dayDetailShow}>{ev.show}</p>
                      <p className={styles.dayDetailVenue}>
                        {ev.time && <><strong>{ev.time} hrs</strong> · </>}
                        {ev.venue} — {ev.city}
                      </p>
                      {ev.notes && <p className={styles.notes}>{ev.notes}</p>}
                      {ev.ticketsUrl && (
                        <a href={ev.ticketsUrl} target="_blank" rel="noopener noreferrer"
                           className={`btn btn-primary ${styles.ticketBtn}`}>
                          {t.calendar.buy}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Leyenda */}
              <div className={styles.legend}>
                {Object.entries(SHOW_COLORS).map(([name, color]) =>
                  upcoming.some(ev => ev.show.startsWith(name)) ? (
                    <span key={name} className={styles.legendItem}>
                      <span className={styles.legendDot} style={{ background: color }} />
                      {name}
                    </span>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
