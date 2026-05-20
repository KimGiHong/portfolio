/**
 * LetterReveal
 * Splits text into individual letters and cascades them in with a staggered
 * fade-up. Renders an aria-label fallback so screen readers see the whole
 * word; visual letters are aria-hidden. Honors prefers-reduced-motion.
 */
import { useEffect, useState, type CSSProperties, type ReactElement } from 'react';
import { motion } from 'motion/react';

interface LetterRevealProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'span' | 'div' | 'p';
}

const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reduced;
};

export default function LetterReveal({
  text,
  delay = 0,
  staggerDelay = 0.04,
  y = 24,
  className,
  style,
  as = 'span',
}: LetterRevealProps): ReactElement {
  const Tag = as as unknown as React.ElementType;
  const reduced = usePrefersReducedMotion();
  const letters = Array.from(text);

  if (reduced) {
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag className={className} style={style} aria-label={text}>
      {letters.map((letter, i) => (
        <motion.span
          key={`${i}-${letter}`}
          aria-hidden="true"
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * staggerDelay,
          }}
          style={{
            display: 'inline-block',
            whiteSpace: letter === ' ' ? 'pre' : undefined,
          }}
        >
          {letter === ' ' ? ' ' : letter}
        </motion.span>
      ))}
    </Tag>
  );
}
