import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A slim reading-progress bar pinned to the very top of the page. It tracks how
 * far the reader has scrolled through a long-form page (articles, resources),
 * smoothed slightly so it feels responsive rather than jumpy.
 */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-teal-400 to-teal-600"
    />
  );
}
