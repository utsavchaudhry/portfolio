import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Experience.module.css';
import SectionHeader from '../components/SectionHeader.jsx';
import FadeIn from '../components/FadeIn.jsx';
import { experience } from '../data/content.js';

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experience[activeIdx];

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader eyebrow="02 — Experience" title="Where I've worked" />

        <FadeIn delay={0.1}>
          <div className={styles.layout}>
            {/* Tab list */}
            <div role="tablist" aria-label="Job history" className={styles.tabs}>
              {experience.map((job, i) => (
                <button
                  key={job.company}
                  role="tab"
                  aria-selected={i === activeIdx}
                  className={`${styles.tab} ${i === activeIdx ? styles.tabActive : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  {job.company}
                </button>
              ))}
              <span
                className={styles.tabIndicator}
                style={{ '--idx': activeIdx }}
              />
            </div>

            {/* Active panel */}
            <div className={styles.panelWrap}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.company}
                  className={styles.panel}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className={styles.role}>
                    {active.role}{' '}
                    <span className={styles.at}>
                      @ <span className={styles.company}>{active.company}</span>
                    </span>
                  </h3>
                  <div className={styles.meta}>
                    <span>{active.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{active.location}</span>
                  </div>

                  <ul className={styles.bullets}>
                    {active.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <ul className={styles.tags}>
                    {active.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
