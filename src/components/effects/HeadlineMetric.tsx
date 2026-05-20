/**
 * HeadlineMetric
 * A prominent before → after stat. When scrolled into view, the "after"
 * number animates from the "before" value toward its target, making the
 * change feel like an actual transformation rather than a static comparison.
 * Honors prefers-reduced-motion.
 */
import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';

interface HeadlineMetricProps {
  label: string;
  before: number;
  after: number;
  unit?: string;
  duration?: number;
  /** locale grouping for thousands separator; defaults to ko-KR */
  locale?: string;
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

export default function HeadlineMetric({
  label,
  before,
  after,
  unit = '',
  duration = 1.8,
  locale = 'ko-KR',
}: HeadlineMetricProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = usePrefersReducedMotion();
  const [current, setCurrent] = useState<number>(reduced ? after : before);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setCurrent(after);
      return;
    }
    const controls = animate(before, after, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCurrent(v),
    });
    return () => controls.stop();
  }, [inView, before, after, reduced, duration]);

  const fmt = (n: number) => Math.round(n).toLocaleString(locale);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-3 rounded-lg border border-border-soft bg-paper-aged/40 px-6 py-6 sm:px-8 sm:py-7"
    >
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-subtle">
        Headline Outcome
      </span>
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-display text-ink-primary tabular-nums">
        <span className="text-xl sm:text-2xl text-ink-muted">
          {fmt(before)}
          {unit && <span className="ml-1 text-base text-ink-subtle">{unit}</span>}
        </span>
        <span aria-hidden="true" className="text-xl sm:text-2xl text-accent-maple">
          →
        </span>
        <span className="text-4xl sm:text-5xl text-ink-primary">
          {fmt(current)}
          {unit && <span className="ml-1 text-2xl sm:text-3xl text-ink-muted">{unit}</span>}
        </span>
      </div>
      <p className="text-sm text-ink-muted leading-[1.55]">{label}</p>
    </div>
  );
}
