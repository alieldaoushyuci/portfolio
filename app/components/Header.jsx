'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const sections = [
  { slug: '/about', title: 'About' },
  { slug: '/education', title: 'Education' },
  { slug: '/experience', title: 'Experience' },
  { slug: '/projects', title: 'Projects' },
  { slug: '/skills', title: 'Skills' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isCurrent = (slug) =>
    pathname === slug || pathname?.startsWith(`${slug}/`);

  return (
    <header className="topbar">
      <div className="topbar-row">
        <Link href="/" className="brand" aria-label="Home">
          <span className="brand-mark">AE</span>
          <span className="brand-name">Ali Eldaoushy</span>
        </Link>

        <button
          type="button"
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="topbar-nav" aria-label="Primary">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={s.slug}
              className={isCurrent(s.slug) ? 'is-active' : undefined}
              aria-current={isCurrent(s.slug) ? 'page' : undefined}
            >
              {s.title}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="topbar-panel" aria-label="Mobile">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={s.slug}
              className={isCurrent(s.slug) ? 'is-active' : undefined}
              aria-current={isCurrent(s.slug) ? 'page' : undefined}
            >
              {s.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
