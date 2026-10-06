'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PixelRunner } from './PixelIcons';

const RACES = [
  {
    id: 'fun-in-the-sun',
    name: 'Fun in the Sun',
    dateLabel: 'Jun 6, 2026',
    date: '2026-06-06',
    href: 'https://www.abetterworldrunning.com/',
  },
  {
    id: 'ironbruin',
    name: 'UCLA IronBruin',
    dateLabel: 'Oct 18, 2026',
    date: '2026-10-18',
    href: 'https://losangeles.californiatriathlon.org/',
  },
  {
    id: 'newport',
    name: 'Newport Dunes',
    dateLabel: 'Nov 1, 2026',
    date: '2026-11-01',
    href: 'https://newportdunes.californiatriathlon.org/',
  },
  {
    id: 'texas',
    name: 'IM 70.3 Texas',
    dateLabel: 'Apr 4, 2027',
    date: '2027-04-04',
    href: 'https://www.ironman.com/races/im703-texas',
  },
];

const REVEAL_THRESHOLD = 0.07;

function daysUntil(isoDate) {
  const target = new Date(`${isoDate}T12:00:00`);
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  return Math.round((end - start) / 86400000);
}

function raceProgress(index, total) {
  if (total <= 1) return 0;
  return index / (total - 1);
}

export default function RaceTimeline() {
  const trackRef = useRef(null);
  const dragging = useRef(false);
  const lastProgress = useRef(0);
  const frameTick = useRef(0);

  const races = useMemo(
    () =>
      RACES.map((race) => ({
        ...race,
        days: daysUntil(race.date),
        past: daysUntil(race.date) < 0,
      })),
    []
  );

  const nextIndex = Math.max(
    0,
    races.findIndex((r) => !r.past)
  );

  const [progress, setProgress] = useState(() =>
    raceProgress(nextIndex, races.length)
  );
  const [facing, setFacing] = useState(1);
  const [frame, setFrame] = useState(0);
  const [activeIndex, setActiveIndex] = useState(nextIndex);

  const syncActive = useCallback(
    (value) => {
      let best = 0;
      let bestDist = Infinity;
      races.forEach((_, i) => {
        const dist = Math.abs(value - raceProgress(i, races.length));
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActiveIndex(best);
    },
    [races]
  );

  const moveTo = useCallback(
    (clientX, { animateLegs = true } = {}) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const pad = 28;
      const usable = Math.max(1, rect.width - pad * 2);
      const next = Math.min(1, Math.max(0, (clientX - rect.left - pad) / usable));
      const delta = next - lastProgress.current;
      if (Math.abs(delta) > 0.002) {
        setFacing(delta >= 0 ? 1 : -1);
        if (animateLegs) {
          frameTick.current += 1;
          if (frameTick.current % 2 === 0) {
            setFrame((f) => (f + 1) % 2);
          }
        }
      }
      lastProgress.current = next;
      setProgress(next);
      syncActive(next);
    },
    [syncActive]
  );

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    moveTo(e.clientX);
  };

  const onPointerUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);

    let best = 0;
    let bestDist = Infinity;
    races.forEach((_, i) => {
      const dist = Math.abs(lastProgress.current - raceProgress(i, races.length));
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    const snapped = raceProgress(best, races.length);
    lastProgress.current = snapped;
    setProgress(snapped);
    setActiveIndex(best);
  };

  useEffect(() => {
    lastProgress.current = progress;
  }, []);

  const onKeyDown = (e) => {
    const step = 1 / Math.max(1, races.length - 1);
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(1, progress + step);
      setFacing(1);
      setFrame((f) => (f + 1) % 2);
      lastProgress.current = next;
      setProgress(next);
      syncActive(next);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(0, progress - step);
      setFacing(-1);
      setFrame((f) => (f + 1) % 2);
      lastProgress.current = next;
      setProgress(next);
      syncActive(next);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setFacing(-1);
      lastProgress.current = 0;
      setProgress(0);
      syncActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setFacing(1);
      lastProgress.current = 1;
      setProgress(1);
      syncActive(1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const race = races[activeIndex];
      if (race) window.open(race.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="race-timeline">
      <div
        ref={trackRef}
        className="race-track"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="race-track-line" aria-hidden="true" />

        {races.map((race, i) => {
          const pos = raceProgress(i, races.length);
          const near = Math.abs(progress - pos) <= REVEAL_THRESHOLD;
          const isActive = i === activeIndex;
          return (
            <div
              key={race.id}
              className={[
                'race-marker',
                race.past ? 'is-past' : '',
                isActive ? 'is-active' : '',
                near ? 'is-near' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ left: `calc(28px + (100% - 56px) * ${pos})` }}
            >
              <span className="race-timeline-dot" aria-hidden="true" />
              <a
                href={race.href}
                target="_blank"
                rel="noopener noreferrer"
                className="race-timeline-name"
                onClick={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
              >
                {race.name}
              </a>
              <span
                className={`race-timeline-meta${near ? ' is-revealed' : ''}`}
                aria-hidden={!near}
              >
                {near ? race.dateLabel : '\u00a0'}
              </span>
            </div>
          );
        })}

        <div
          className="race-runner-wrap"
          style={{ left: `calc(28px + (100% - 56px) * ${progress})` }}
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={races.length - 1}
          aria-valuenow={activeIndex}
          aria-valuetext={`${races[activeIndex].name}${
            Math.abs(progress - raceProgress(activeIndex, races.length)) <=
            REVEAL_THRESHOLD
              ? `, ${races[activeIndex].dateLabel}`
              : ''
          }`}
          aria-label="Race course runner. Drag or use arrow keys to move between races."
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
        >
          <PixelRunner facing={facing} frame={frame} />
        </div>
      </div>
    </div>
  );
}
