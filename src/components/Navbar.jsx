import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { navLinks, personal } from '../data/content.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label={`${personal.name} — back to top`}
        >
          <span className={styles.brandMark}>{personal.initials}</span>
          <span className={styles.brandName}>{personal.name}</span>
        </a>

        <nav
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}
          aria-label="Primary"
        >
          <ol>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={active === link.href ? styles.linkActive : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
          <a className={styles.cta} href={personal.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
