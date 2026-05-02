import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/content.js';

/**
 * Pulls the 11-char video ID out of any common YouTube URL form:
 *   youtube.com/watch?v=ID, youtu.be/ID, /shorts/ID, /embed/ID, /v/ID
 */
function getYouTubeId(url) {
  const m = String(url || '').match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader eyebrow="03 — Projects" title="Things I've built" />

        <div className={styles.list}>
          {projects.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;
  const videoId = getYouTubeId(project.youtubeUrl);
  const isFeatured = Array.isArray(project.highlights) && project.highlights.length > 0;

  return (
    <motion.article
      className={`${styles.card} ${reversed ? styles.cardReversed : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.visual}>
        {videoId ? (
          <YouTubeEmbed videoId={videoId} title={project.title} />
        ) : (
          <PlaceholderVisual project={project} />
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.eyebrow}>
          {isFeatured ? 'Featured Project' : 'Side Project'}
        </span>
        <h3 className={styles.title}>{project.title}</h3>
        {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}

        <div className={styles.descriptionWrap}>
          <p className={styles.description}>{project.description}</p>
        </div>

        {project.tags?.length > 0 && (
          <ul className={styles.tags}>
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        {project.period && <span className={styles.period}>{project.period}</span>}
      </div>
    </motion.article>
  );
}

/* ────────────────── Visual variants ────────────────── */

function PlaceholderVisual({ project }) {
  return (
    <div className={styles.placeholder} aria-hidden="true">
      <div className={styles.placeholderGlow} />
      <div className={styles.placeholderLabel}>
        {project.subtitle && (
          <span className={styles.placeholderEyebrow}>{project.subtitle}</span>
        )}
        <span className={styles.placeholderTitle}>{project.title}</span>
      </div>
      {project.highlights?.length > 0 && (
        <ul className={styles.placeholderHighlights}>
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Lite YouTube embed: shows the thumbnail until clicked, then swaps in the
 * actual iframe. Avoids loading N iframes on initial page render.
 */
function YouTubeEmbed({ videoId, title }) {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <iframe
        className={styles.video}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={styles.videoThumb}
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className={styles.videoThumbImg}
      />
      <span className={styles.videoOverlay} aria-hidden="true" />
      <span className={styles.videoPlay} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
