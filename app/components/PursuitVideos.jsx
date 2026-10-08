'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEOS = [
  {
    src: '/portfolio/pursuits/pursuit-1.mov',
    label: 'Other pursuit clip 1',
  },
  {
    src: '/portfolio/pursuits/pursuit-3.mov',
    label: 'Other pursuit clip 3',
  },
  {
    src: '/portfolio/pursuits/pursuit-2.mov',
    label: 'Other pursuit clip 2',
  },
  {
    src: '/portfolio/pursuits/pursuit-4.mov',
    label: 'Other pursuit clip 4',
  },
  {
    src: '/portfolio/pursuits/pursuit-5.mp4',
    label: 'Skydiving',
  },
];

function sliceStyle(index) {
  const start = -90 + index * 72 + 0.8;
  const end = start + 70.4;
  const point = (angle, radius = 50) => {
    const radians = angle * Math.PI / 180;
    return [50 + radius * Math.cos(radians), 50 + radius * Math.sin(radians)];
  };
  const points = Array.from({ length: 25 }, (_, step) =>
    point(start + (end - start) * step / 24));
  const arc = points.map(coords => coords.map(value => `${value.toFixed(3)}%`).join(' '));
  // Fit each preview to its slice's bounds rather than an oversized square.
  const bounds = [[50, 50], ...points];
  const left = Math.min(...bounds.map(([x]) => x));
  const top = Math.min(...bounds.map(([, y]) => y));
  const right = Math.max(...bounds.map(([x]) => x));
  const bottom = Math.max(...bounds.map(([, y]) => y));
  return {
    '--slice': `polygon(50% 50%, ${arc.join(', ')})`,
    '--video-left': `${left}%`,
    '--video-top': `${top}%`,
    '--video-width': `${right - left}%`,
    '--video-height': `${bottom - top}%`,
  };
}

export default function PursuitVideos() {
  const refs = useRef([]);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    refs.current.forEach((video) => {
      if (!video) return;
      video.muted = true;
      const play = video.play();
      if (play?.catch) play.catch(() => {});
    });
  }, []);

  useEffect(() => {
    refs.current.forEach((video, i) => {
      if (!video) return;
      if (focused === null || focused === i) {
        const play = video.play();
        if (play?.catch) play.catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [focused]);

  return (
    <div
      className={`platform pursuit-videos${focused !== null ? ' is-focusing' : ''}`}
      onMouseLeave={() => setFocused(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(null);
      }}
    >
      {VIDEOS.map((clip, i) => (
        <button
          key={clip.src}
          type="button"
          style={sliceStyle(i)}
          aria-label={`Focus ${clip.label}`}
          aria-pressed={focused === i}
          className={[
            'pursuit-video',
            focused === i ? 'is-focused' : '',
            focused !== null && focused !== i ? 'is-dimmed' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onPointerEnter={(event) => {
            if (event.pointerType === 'mouse') setFocused(i);
          }}
          onFocus={(event) => {
            if (event.currentTarget.matches(':focus-visible')) setFocused(i);
          }}
          onClick={() => setFocused(current => current === i ? null : i)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setFocused(null);
          }}
        >
          <video
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={clip.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={clip.label}
          />
        </button>
      ))}
    </div>
  );
}
