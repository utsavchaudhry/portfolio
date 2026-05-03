import styles from './Awards.module.css';
import SectionHeader from '../components/SectionHeader.jsx';
import FadeIn from '../components/FadeIn.jsx';
import { awards } from '../data/content.js';

export default function Awards() {
  return (
    <section id="awards" className="section">
      <div className="container">
        <SectionHeader eyebrow="04 — Recognition" title="Awards" />

        <div className={styles.grid}>
          {awards.map((a, i) => {
            const isLink = Boolean(a.url);
            const linkProps = isLink
              ? {
                  as: 'a',
                  href: a.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `${a.title} — view certificate (opens in new tab)`,
                }
              : {};

            return (
              <FadeIn
                key={a.title}
                delay={i * 0.08}
                className={`${styles.card} ${isLink ? styles.cardLink : ''}`}
                {...linkProps}
              >
                {a.image && (
                  <div className={styles.imageWrap}>
                    <img
                      src={a.image}
                      alt={a.imageAlt || ''}
                      loading="lazy"
                      className={styles.image}
                    />
                  </div>
                )}
                <div className={styles.body}>
                  <div className={styles.year}>{a.year}</div>
                  <h3 className={styles.title}>
                    <span>{a.title}</span>
                    {isLink && (
                      <span className={styles.linkIcon} aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          width="14"
                          height="14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7M17 7H8M17 7V16" />
                        </svg>
                      </span>
                    )}
                  </h3>
                  <p className={styles.placement}>{a.placement}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
