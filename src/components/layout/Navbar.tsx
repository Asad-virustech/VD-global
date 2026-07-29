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
  // Floating frosted capsule: a tinted dark glass over the hero, a light glass
  // once scrolled. The capsule always carries its own blurred surface, so links
  // are never rendered white-on-white or dark-on-dark.
  const onDark = !scrolled;

  const linkClass = (isActive: boolean) =>
    `rounded-full px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-200 ${
      isActive
        ? onDark
          ? 'bg-white/10 text-teal-300'
          : 'bg-teal-50 text-teal-700'
        : onDark
          ? 'text-white/70 hover:bg-white/10 hover:text-white'
          : 'text-ink-500 hover:bg-ink-100/70 hover:text-ink-900'
    }`;

  const moreTriggerClass = `flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-200 ${
    onDark
      ? 'text-white/70 hover:bg-white/10 hover:text-white'
      : 'text-ink-500 hover:bg-ink-100/70 hover:text-ink-900'
  }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-px pt-3 sm:pt-4">
        <nav
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 rounded-2xl border pl-4 pr-3 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
            onDark
              ? 'border-white/10 bg-ink-950/40'
              : 'border-ink-200/70 bg-white/80 shadow-lg shadow-ink-950/5'
          }`}
        >
          {/* Left — logo + primary links */}
          <div className="flex items-center gap-1">
            <Logo light={onDark} className="mr-1 shrink-0" />

            <div className="hidden items-center gap-0.5 lg:flex">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}

              {moreNav.length > 0 && (
                <div className="group relative">
                  <button className={moreTriggerClass}>
                    More
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-64 overflow-hidden rounded-2xl border border-ink-100 bg-white p-2 shadow-card-hover">
                      {moreNav.map((item) => (
                        <NavLink
                          key={item.href}
                          to={item.href}
                          className={({ isActive }) =>
                            `block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                              isActive ? 'bg-teal-50 text-teal-800' : 'text-ink-700 hover:bg-ink-50'
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
              )}
            </div>
          </div>

          {/* Right — CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Button
              as="link"
              to="/contact"
              size="sm"
              variant="primary"
              className="hidden lg:inline-flex"
            >
              Book a consultation
            </Button>

            <button
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors lg:hidden ${
                onDark ? 'text-white hover:bg-white/10' : 'text-ink-700 hover:bg-ink-100'
              }`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — a floating card below the capsule */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-2 overflow-hidden rounded-2xl border border-ink-100 bg-white p-2 shadow-card-hover lg:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? 'bg-teal-50 text-teal-800' : 'text-ink-700 hover:bg-ink-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="p-2 pt-1">
                <Button as="link" to="/contact" size="md" variant="primary" className="w-full">
                  Book a consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
