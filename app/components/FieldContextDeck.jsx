'use client';

import { useState } from 'react';
function hostLabel(href) {
  try {
    return new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return 'Open';
  }
}

export default function FieldContextDeck({ items }) {
  const [flipped, setFlipped] = useState(null);

  return (
    <ul className="context-deck">
      {items.map((item) => {
        const isFlipped = flipped === item.title;
        return (
          <li key={item.title} className="context-card-wrap">
            <div className={`context-card${isFlipped ? ' is-flipped' : ''}`}>
              <button
                type="button"
                className="context-face context-front"
                aria-expanded={isFlipped}
                onClick={() =>
                  setFlipped((cur) => (cur === item.title ? null : item.title))
                }
              >
                <span className="context-title">{item.title}</span>
                <span className="context-hint">Flip</span>
              </button>
              <div className="context-face context-back">
                <span className="context-host">{hostLabel(item.href)}</span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="context-open"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open →
                </a>
                <button
                  type="button"
                  className="context-back-flip"
                  onClick={() => setFlipped(null)}
                >
                  Back
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
