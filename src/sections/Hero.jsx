import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { personal, socials } from '../data/content.js';
import SocialIcon from '../components/SocialIcons.jsx';

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className="container">
        <motion.div
          className={styles.content}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className={styles.greeting}>
            Hi, my name is
          </motion.p>

          <motion.h1 variants={item} className={styles.name}>
            {personal.name}.
          </motion.h1>

          <motion.h2 variants={item} className={styles.tagline}>
            {personal.tagline}
          </motion.h2>

          <motion.p variants={item} className={styles.intro}>
            {personal.intro}
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <a className={styles.btnPrimary} href="#projects">
              See my work
            </a>
            <a
              className={styles.btnGhost}
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé
            </a>
          </motion.div>

          <motion.ul variants={item} className={styles.socials} aria-label="Social links">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={styles.socialBtn}
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <span>scroll</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </div>
    </section>
  );
}
