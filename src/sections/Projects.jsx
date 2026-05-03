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

/** True if the URL is a YouTube Shorts link (always portrait 9:16). */
function isShortsUrl(url) {
  return /youtube\.com\/shorts\//i.test(String(url || ''));
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

const VALID_ORIENTATIONS = new Set(['landscape', 'portrait', 'square']);

/**
 * Normalize URL input to an array of `{ url, orientation }` objects.
 *
 * Accepts each entry as:
 *   - 'string'                                          (auto-detected)
 *   - { url: 'string', orientation: 'square' | ... }    (per-URL override)
 *   - falsy / malformed                                 (dropped)
 *
 * Also accepts the legacy `youtubeUrl` field (string or array).
 * Returns [] when nothing usable is present.
 */
function collectVideos(project) {
  const raw = project.youtubeUrls ?? project.youtubeUrl ?? [];
  const arr = Array.isArray(raw) ? raw : [raw];

  return arr
    .map((entry) => {
      if (typeof entry === 'string' && entry.trim().length > 0) {
        return { url: entry.trim(), orientation: undefined };
      }
      if (entry && typeof entry === 'object' && typeof entry.url === 'string') {
        const orientation = VALID_ORIENTATIONS.has(entry.orientation)
          ? entry.orientation
          : undefined;
        return { url: entry.url.trim(), orientation };
      }
      return null;
    })
    .filter((v) => v && v.url.length > 0);
}

/** Per-URL orientation: explicit override wins, else auto-detect from URL. */
function resolveOrientation(video) {
  if (video.orientation) return video.orientation;
  if (isShortsUrl(video.url)) return 'portrait';
  return 'landscape';
}

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;
  const videos = collectVideos(project);
  const [activeIdx, setActiveIdx] = useState(0);

  // Clamp activeIdx defensively if the source array shrinks at runtime.
  const safeIdx = Math.min(activeIdx, Math.max(videos.length - 1, 0));
  const activeVideo = videos[safeIdx];
  const videoId = getYouTubeId(activeVideo?.url);

  // Orientation recomputes per active URL — CSS layout swaps on navigation.
  const orientation = activeVideo ? resolveOrientation(activeVideo) : 'landscape';
  const isPortrait = orientation === 'portrait';
  const isSquare = orientation === 'square';

  const cardClass = [
    styles.card,
    reversed && styles.cardReversed,
    isPortrait && styles.cardPortrait,
    isSquare && styles.cardSquare,
  ]
    .filter(Boolean)
    .join(' ');

  const goPrev = () =>
    setActiveIdx((i) => (i - 1 + videos.length) % videos.length);
  const goNext = () =>
    setActiveIdx((i) => (i + 1) % videos.length);

  return (
    <motion.article
      className={cardClass}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.visualSlot}>
        <div className={styles.visual}>
          {videoId ? (
            <YouTubeEmbed
              key={videoId}
              videoId={videoId}
              title={project.title}
              orientation={orientation}
            />
          ) : (
            <PlaceholderVisual project={project} />
          )}
        </div>

        {videos.length > 1 && (
          <VideoNav
            count={videos.length}
            active={safeIdx}
            onSelect={setActiveIdx}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </div>

      <div className={styles.body}>
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

function VideoNav({ count, active, onSelect, onPrev, onNext }) {
  return (
    <div className={styles.videoNav} role="group" aria-label="Video carousel">
      <button
        type="button"
        className={styles.navArrow}
        onClick={onPrev}
        aria-label="Previous video"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
             stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <ol className={styles.navDots}>
        {Array.from({ length: count }, (_, i) => (
          <li key={i}>
            <button
              type="button"
              className={`${styles.navDot} ${i === active ? styles.navDotActive : ''}`}
              onClick={() => onSelect(i)}
              aria-label={`Go to video ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
            />
          </li>
        ))}
      </ol>

      <button
        type="button"
        className={styles.navArrow}
        onClick={onNext}
        aria-label="Next video"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
             stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <span className={styles.navCounter} aria-hidden="true">
        {active + 1} / {count}
      </span>
    </div>
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
function YouTubeEmbed({ videoId, title, orientation = 'landscape' }) {
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

  const thumbClass = [
    styles.videoThumbImg,
    orientation === 'portrait' && styles.videoThumbImgPortrait,
    orientation === 'square' && styles.videoThumbImgSquare,
  ]
    .filter(Boolean)
    .join(' ');

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
        className={thumbClass}
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
