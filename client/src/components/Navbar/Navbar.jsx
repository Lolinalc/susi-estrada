import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { t, toggle, lang } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isSolid = !isHome || scrolled || menuOpen;

  const navItems = [
    { to: "/acerca", label: t.nav.about },
    { to: "/obras", label: t.nav.shows },
    { to: "/calendario", label: t.nav.calendar },
    { to: "/galeria", label: t.nav.gallery },
    { to: "/prensa", label: t.nav.press },
    { to: "/contacto", label: t.nav.contact },
  ];

  return (
    <header
      className={`${styles.header} ${isSolid ? styles.solid : styles.transparent}`}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <NavLink
          to="/"
          className={styles.logo}
          aria-label="Susi Estrada — inicio"
        >
          <span className={styles.logoMain}>SUSI ESTRADA</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className={styles.rightControls}>
          {/* Language toggle */}
          <button
            className={styles.langToggle}
            onClick={toggle}
            aria-label={`Cambiar idioma a ${lang === "es" ? "inglés" : "español"}`}
          >
            {t.nav.lang}
          </button>

          {/* Instagram link */}
          <a
            href="https://www.instagram.com/sabrosa.teatro/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
            aria-label="Instagram de Susi Estrada"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>

          {/* Hamburger (mobile) */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-label="Menú móvil"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`
                }
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.mobileSocial}>
          <a
            href="https://www.instagram.com/sabrosa.teatro/"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
          >
            Instagram
          </a>
        </div>
      </nav>
    </header>
  );
}
