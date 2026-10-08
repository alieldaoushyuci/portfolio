'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Each filled cell is one pixel in a 24 × 24 monochrome logo.
function PixelLogo({ rows }) {
  return (
    <svg
      className="pixel-note-svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rows.flatMap((row, y) => [...row].map((pixel, x) => pixel === '#'
        ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />
        : null))}
    </svg>
  );
}

function LinkedInIcon() {
  const rows = Array.from({ length: 24 }, (_, y) =>
    Array.from({ length: 24 }, (_, x) => {
      const square = x >= 2 && x <= 21 && y >= 2 && y <= 21;
      const corner = (x === 2 || x === 21) && (y === 2 || y === 21);
      const i = x >= 5 && x <= 7 && ((y >= 6 && y <= 8) || (y >= 10 && y <= 18));
      const n = (x >= 10 && x <= 12 && y >= 10 && y <= 18)
        || (x >= 13 && x <= 16 && y >= 10 && y <= 12)
        || (x >= 16 && x <= 18 && y >= 12 && y <= 18);
      return square && !corner && !i && !n ? '#' : '.';
    }).join(''));
  return <PixelLogo rows={rows} />;
}

function GitHubIcon() {
  return <PixelLogo rows={[
    '........................',
    '.........######.........',
    '......############......',
    '.....##############.....',
    '....###..######..###....',
    '...####....##....####...',
    '..#####..........#####..',
    '..#####..........#####..',
    '..####............####..',
    '.#####............#####.',
    '.#####............#####.',
    '.#####............#####.',
    '.######..........######.',
    '.#######........#######.',
    '..########....########..',
    '..###..###....########..',
    '..####..##....########..',
    '...####.......#######...',
    '....######....######....',
    '.....#####....#####.....',
    '......####....####......',
    '.........#....#.........',
    '........................',
    '........................',
  ]} />;
}

function EmailIcon() {
  return <PixelLogo rows={Array.from({ length: 24 }, (_, y) =>
    Array.from({ length: 24 }, (_, x) => {
      const border = ((y === 5 || y === 18) && x >= 2 && x <= 21)
        || ((x === 2 || x === 21) && y >= 5 && y <= 18);
      const flap = y >= 6 && y <= 14 && (x === y - 3 || x === 26 - y);
      return border || flap ? '#' : '.';
    }).join(''))} />;
}

function SubstackIcon() {
  return <PixelLogo rows={Array.from({ length: 24 }, (_, y) =>
    Array.from({ length: 24 }, (_, x) => {
      const bar = x >= 3 && x <= 20 && ((y >= 2 && y <= 3) || (y >= 6 && y <= 7));
      const bookmark = x >= 3 && x <= 20 && y >= 10 && y <= 21
        && (y <= 15 || x <= 26 - y || x >= y - 3);
      return bar || bookmark ? '#' : '.';
    }).join(''))} />;
}

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alieldaoushy',
    Icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/alieldaoushyuci',
    Icon: GitHubIcon,
  },
  {
    label: 'Email',
    email: 'aeldaoushy1@gmail.com',
    Icon: EmailIcon,
  },
  {
    label: 'Substack',
    href: 'https://substack.com/@alieldaoushy',
    Icon: SubstackIcon,
  },
];

export default function SocialNotes() {
  const [copyStatus, setCopyStatus] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!copyStatus) return;
    const timer = setTimeout(() => setCopyStatus(''), 3000);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  async function copyEmail(email) {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email copied!');
    } catch {
      setCopyStatus(`Could not copy. Email: ${email}`);
    }
  }

  return (
    <>
    <nav className="social-notes" aria-label="Social links">
      {SOCIALS.map(({ label, href, email, Icon }) => email ? (
        <button
          key={label}
          type="button"
          className="social-note"
          onClick={() => copyEmail(email)}
          aria-label={`Copy email address ${email}`}
        >
          <Icon />
          <span className="social-note-tip">Copy email</span>
        </button>
      ) : (
        <a
          key={label}
          href={href}
          className="social-note"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon />
          <span className="social-note-tip">{label}</span>
        </a>
      ))}
    </nav>
    {mounted && createPortal(<div className={`email-copy-toast${copyStatus ? ' is-visible' : ''}`} role="status" aria-live="polite" aria-atomic="true">
      {copyStatus}
    </div>, document.body)}
    </>
  );
}
