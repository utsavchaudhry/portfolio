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
          {awards.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08} className={styles.card}>
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
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.placement}>{a.placement}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
