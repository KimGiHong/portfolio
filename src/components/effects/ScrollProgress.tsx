/**
 * ScrollProgress
 * A thin maple line at the top of the viewport that grows with page scroll.
 * Spring-smoothed so it feels like ink trailing the reader rather than a
 * mechanical readout. Hidden in print.
 */
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-accent-maple/85 pointer-events-none print:hidden"
    />
  );
}
