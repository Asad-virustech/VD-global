import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * On a new navigation (clicking a link), start the next page at the top. On
 * Back/Forward (a POP), we leave the scroll position alone so the browser can
 * restore where the reader was — e.g. returning to the Knowledge Hub lands at
 * the article they clicked, not back at the top.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'POP') return;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, navigationType]);

  return null;
}
