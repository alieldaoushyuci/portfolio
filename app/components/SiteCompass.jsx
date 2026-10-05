'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const PAGE_MARKS = {
  '/': { label: 'Home', angle: 0 },
  '/about': { label: 'About', angle: 45 },
  '/education': { label: 'Education', angle: 90 },
  '/experience': { label: 'Experience', angle: 135 },
  '/involvement': { label: 'Involvement', angle: 180 },
  '/projects': { label: 'Projects', angle: 225 },
  '/skills': { label: 'Skills', angle: 270 },
};

const ABOUT_SECTIONS = [
  { id: 'fitness', label: 'Fitness', angle: 30 },
  { id: 'music', label: 'Music', angle: 60 },
  { id: 'traveling', label: 'Travel', angle: 90 },
  { id: 'reading', label: 'Reading', angle: 120 },
  { id: 'other-pursuits', label: 'Pursuits', angle: 150 },
];

export default function SiteCompass() {
  const pathname = usePathname() || '/';
  const [section, setSection] = useState(null);

  useEffect(() => {
    if (pathname !== '/about') {
      setSection(null);
      return;
    }

    const nodes = ABOUT_SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter(Boolean);

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [pathname]);

  const page = PAGE_MARKS[pathname] || PAGE_MARKS['/'];
  const about = ABOUT_SECTIONS.find((s) => s.id === section);
  const label = about ? about.label : page.label;
  const angle = about ? about.angle : page.angle;

  return (
    <div className="site-compass" aria-hidden="true">
      <div
        className="site-compass-dial"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <span className="site-compass-needle" />
      </div>
      <span className="site-compass-mark">AE</span>
      <span className="site-compass-label">{label}</span>
    </div>
  );
}
