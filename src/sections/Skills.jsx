import styles from './Skills.module.css';
import SectionHeader from '../components/SectionHeader.jsx';
import FadeIn from '../components/FadeIn.jsx';
import { skillGroups } from '../data/content.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader eyebrow="05 — Toolkit" title="Skills & Tools" />

        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.08} className={styles.group}>
              <div className={styles.label}>{group.label}</div>
              <ul className={styles.chips}>
                {group.items.map((item) => (
                  <li key={item} className={styles.chip}>{item}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
