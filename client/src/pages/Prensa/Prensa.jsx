import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import PressCard from '../../components/PressCard/PressCard'
import { pressItems } from '../../data/prensa'
import styles from './Prensa.module.css'

export default function Prensa() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>Prensa — Susi Estrada</title>
        <meta name="description" content="Cobertura mediática y notas de prensa sobre el trabajo de Susi Estrada en teatro, festivales y producción cultural." />
      </Helmet>

      <section className={`section ${styles.prensa}`}>
        <div className="container">
          <span className="section-eyebrow">{t.press.eyebrow}</span>
          <h1 className="section-title">{t.press.title}</h1>
          <div className="section-divider" />

          <div className={styles.grid}>
            {pressItems.map((item) => (
              <PressCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
