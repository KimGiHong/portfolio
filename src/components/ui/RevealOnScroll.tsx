/**
 * RevealOnScroll
 * Fades + lifts children into view when they enter the viewport.
 * Falls back to a plain render if the user prefers reduced motion.
 */
import { useEffect, useRef, useState, type JSX, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';

type Tag = keyof JSX.IntrinsicElements;

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: Tag;
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

export default function RevealOnScroll({
  children,
  delay = 0,
  y = 12,
  once = true,
  as = 'div',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, amount: 0.2 });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    const Tag = as as unknown as React.ElementType;
    return <Tag ref={ref}>{children}</Tag>;
  }

  const MotionTag = motion[as as keyof typeof motion] as unknown as React.ElementType;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
