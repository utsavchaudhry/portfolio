import FadeIn from './FadeIn.jsx';

export default function SectionHeader({ eyebrow, title }) {
  return (
    <FadeIn>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
    </FadeIn>
  );
}
