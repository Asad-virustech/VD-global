import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { getConsent, setConsent, loadTrackers, loadChat, trackersLoaded } from '../../lib/consent';

/** Custom event the footer's "Cookie settings" control dispatches to reopen this. */
export const COOKIE_SETTINGS_EVENT = 'vdg:cookie-settings';

/**
 * Cookie-consent banner. On first visit it asks before any non-essential
 * tracker loads: Accept loads Google Analytics, Clarity, and Tidio; Decline
 * loads none. The choice is remembered, and can be changed later via the
 * "Cookie settings" link in the footer.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The live chat is functional and loads for everyone.
    loadChat();

    const choice = getConsent();
    if (choice === 'accepted') loadTrackers();
    else if (choice === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const accept = () => {
    setConsent('accepted');
    loadTrackers();
    setVisible(false);
  };

  const decline = () => {
    setConsent('declined');
    setVisible(false);
    // If trackers were already running (a later change of mind), reload so they
    // actually stop rather than lingering until the next visit.
    if (trackersLoaded()) window.location.reload();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' as const }}
          className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-ink-200 bg-white/95 p-5 shadow-[0_10px_45px_rgba(2,6,23,0.18)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
            <div className="text-sm leading-relaxed text-ink-600">
              <p className="font-semibold text-ink-900">We use cookies</p>
              <p className="mt-1 max-w-2xl">
                We use analytics cookies to understand how the site is used so we can improve it. You
                can accept or decline them. Read our{' '}
                <Link
                  to="/cookies"
                  className="font-medium text-teal-700 underline hover:text-teal-800"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button as="button" variant="outline" size="md" onClick={decline}>
                Decline
              </Button>
              <Button as="button" variant="primary" size="md" onClick={accept}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
