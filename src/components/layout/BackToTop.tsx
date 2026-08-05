import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * A smart "back to top" control. It stays out of the way until the reader has
 * scrolled a full viewport down, then fades in at the bottom-right; clicking it
 * smoothly returns to the top (respecting reduced-motion preferences).
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2, ease: 'easeOut' as const }}
          className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-gradient-to-b from-teal-500/90 to-teal-700/90 text-white shadow-teal-glow backdrop-blur-md transition-colors duration-200 hover:from-teal-400/90 hover:to-teal-600/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:bottom-8 sm:left-8"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
