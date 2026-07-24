import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../../content/site';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const primaryNav = NAV_ITEMS.slice(0, 5);
  const moreNav = NAV_ITEMS.slice(5);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-100 bg-white/85 backdrop-blur-md shadow-soft'
          : 'border-b border-transparent bg-white/0'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-20">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-teal-800'
                    : 'text-ink-600 hover:text-ink-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900">
              More
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute right-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="w-64 overflow-hidden rounded-2xl border border-ink-100 bg-white p-2 shadow-card">
                {moreNav.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? 'bg-teal-50 text-teal-800'
                          : 'text-ink-700 hover:bg-ink-50'
                      }`
                    }
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.description && (
                      <span className="mt-0.5 block text-xs text-ink-400">
                        {item.description}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <Button as="link" to="/contact" size="sm" variant="primary">
            Book a consultation
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 hover:bg-ink-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-ink-100 bg-white lg:hidden"
          >
            <div className="container-px space-y-1 py-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-teal-50 text-teal-800'
                        : 'text-ink-700 hover:bg-ink-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <Button as="link" to="/contact" size="md" variant="primary" className="w-full">
                  Book a consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
