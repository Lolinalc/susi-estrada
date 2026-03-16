// ─────────────────────────────────────────────────────────────────────────────
// showUtils.js — Helpers para filtrar temporadas por fecha
//
// Una temporada es "activa" si:
//   • No tiene endDate definido (fecha abierta / por confirmar), O
//   • Su endDate (YYYY-MM-DD) es igual o mayor a hoy
//
// Uso:
//   import { getActiveTemporadas, getExpiredTemporadas, isShowActive } from '../utils/showUtils'
// ─────────────────────────────────────────────────────────────────────────────

/** Retorna la fecha de hoy en formato YYYY-MM-DD, en hora local. */
function todayStr() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/**
 * Determina si una temporada individual está activa (no ha terminado).
 * @param {object} temporada
 * @returns {boolean}
 */
export function isTemporadaActive(temporada) {
  if (!temporada.endDate) return true          // sin fecha → siempre visible
  return temporada.endDate >= todayStr()
}

/**
 * Retorna las temporadas que AÚN NO han terminado.
 * @param {object} show
 * @returns {object[]}
 */
export function getActiveTemporadas(show) {
  return (show.temporadas ?? []).filter(isTemporadaActive)
}

/**
 * Retorna las temporadas que YA terminaron (vendrán de temporadas[], no de pastTemporadas[]).
 * @param {object} show
 * @returns {object[]}
 */
export function getExpiredTemporadas(show) {
  return (show.temporadas ?? []).filter((t) => !isTemporadaActive(t))
}

/**
 * Un show es "activo" si tiene al menos una temporada futura o sin fecha.
 * Útil para el badge "En cartelera" de ShowCard.
 * @param {object} show
 * @returns {boolean}
 */
export function isShowActive(show) {
  return getActiveTemporadas(show).length > 0
}
