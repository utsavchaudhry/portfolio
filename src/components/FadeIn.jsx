import { motion } from 'framer-motion';

/**
 * Drop-in scroll-reveal wrapper. Fades + slides up when the element
 * enters the viewport. Used by section headers and content blocks.
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  as = 'div',
  className,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
