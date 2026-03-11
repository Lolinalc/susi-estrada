import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./ShowCard.module.css";

function RoleBadges({ role, roleLabels }) {
  if (!role) return null;
  const roles = Array.isArray(role) ? role : [role];
  return (
    <div className={styles.roleBadges}>
      {roles.map((r) => (
        <span key={r} className={`${styles.roleBadge} ${styles[`role_${r}`]}`}>
          {roleLabels[r] ?? r}
        </span>
      ))}
    </div>
  );
}

export default function ShowCard({ show }) {
  const { t } = useLanguage();

  const roleLabels = {
    actriz: t.shows.roleActriz,
    produccion: t.shows.roleProduccion,
  };

  if (!show.active) {
    // Past show — card con link a detalles
    return (
      <article className={`${styles.card} ${styles.past}`}>
        <Link
          to={`/obras/${show.slug}`}
          className={styles.imgWrapper}
          aria-label={`Ver detalles de ${show.title}`}
        >
          <img
            src={show.image}
            alt={show.title}
            className={styles.img}
            loading="lazy"
          />
          <div className={styles.imgOverlay} />
        </Link>
        <div className={styles.body}>
          <RoleBadges role={show.role} roleLabels={roleLabels} />
          <h3 className={styles.title}>{show.title}</h3>

          <Link
            to={`/obras/${show.slug}`}
            className={`btn btn-outline ${styles.cta}`}
          >
            {t.shows.cta}
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <Link
        to={`/obras/${show.slug}`}
        className={styles.imgWrapper}
        aria-label={`Ver detalles de ${show.title}`}
      >
        <img
          src={show.image}
          alt={show.title}
          className={styles.img}
          loading="lazy"
        />
        <div className={styles.imgOverlay} />
        <span className={styles.activeTag}>{t.shows.activeTag}</span>
      </Link>
      <div className={styles.body}>
        <RoleBadges role={show.role} roleLabels={roleLabels} />
        <h3 className={styles.title}>{show.title}</h3>
        {show.tagline && <p className={styles.tagline}>{show.tagline}</p>}
        <p className={styles.synopsis}>{show.synopsis.slice(0, 120)}…</p>
        <Link
          to={`/obras/${show.slug}`}
          className={`btn btn-outline ${styles.cta}`}
        >
          {t.shows.cta}
        </Link>
      </div>
    </article>
  );
}
