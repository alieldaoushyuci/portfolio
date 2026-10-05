'use client';

import { useEffect, useState } from 'react';

const START = new Date('2023-09-25T12:00:00');
const END = new Date('2027-06-12T12:00:00');

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function progressBetween(now, start, end) {
  const total = end - start;
  if (total <= 0) return 1;
  return clamp((now - start) / total, 0, 1);
}

export default function DegreeProgress({ label = 'June 2027' }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(progressBetween(new Date(), START, END));
  }, []);

  const size = 108;
  const stroke = 7;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress);

  return (
    <div
      className="degree-progress"
      role="img"
      aria-label={`Degree progress toward ${label}`}
    >
      <svg
        className="degree-progress-ring"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        <circle
          className="degree-progress-track"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
        />
        <circle
          className="degree-progress-value"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="degree-progress-label">
        <span className="degree-progress-when">{label}</span>
      </div>
    </div>
  );
}
