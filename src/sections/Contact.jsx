import styles from './Contact.module.css';
import FadeIn from '../components/FadeIn.jsx';
import SocialIcon from '../components/SocialIcons.jsx';
import { personal, socials } from '../data/content.js';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <FadeIn className={styles.wrap}>
          <span className="section-eyebrow">06 — Let's talk</span>
          <h2 className={styles.title}>Get in touch</h2>
          <p className={styles.copy}>
            I'm always interested in hearing about teleoperation, XR/robotics
            crossover work, and weird hardware projects. If you have a question
            or just want to say hi, my inbox is open.
          </p>

          <a className={styles.mailto} href={`mailto:${personal.email}`}>
            {personal.email}
          </a>

          <div className={styles.meta}>
            <span>{personal.location}</span>
            <span aria-hidden="true">·</span>
            <span>{personal.phone}</span>
          </div>

          <ul className={styles.socials} aria-label="Social links">
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
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
