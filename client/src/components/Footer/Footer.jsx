import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer({ isHome = false }) {
  const { t } = useLanguage();

  return (
    <footer
      className={`${styles.footer} ${isHome ? styles.footerFixed : ""}`}
      role="contentinfo"
    >
      <div className={`container ${styles.inner}`}>
        {/* Divider */}

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Susi Estrada. {t.footer.rights}
          </p>
          <p className={styles.credit}>
            Hecho por{" "}
            <a
              href="https://lolina-solutions.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.creditLink}
            >
              Lolina
            </a>{" "}
            con ❤️ transforma cada acto en magia.
          </p>
        </div>
      </div>
    </footer>
  );
}
