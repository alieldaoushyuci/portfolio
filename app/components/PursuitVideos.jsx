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
];

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
    >
      {VIDEOS.map((clip, i) => (
        <div
          key={clip.src}
          className={[
            'pursuit-video',
            focused === i ? 'is-focused' : '',
            focused !== null && focused !== i ? 'is-dimmed' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onMouseEnter={() => setFocused(i)}
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
        </div>
      ))}
    </div>
  );
}
