'use client';

import { useState } from 'react';

function toPos(place) {
  return {
    left: `${place.x}%`,
    top: `${place.y}%`,
  };
}

export default function TravelMap({ places }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="travel-map">
      <div className="travel-map-board" aria-label="Places I've visited">
        <img
          className="travel-map-img"
          src="/portfolio/travel/world-map.svg"
          alt=""
          aria-hidden="true"
          draggable={false}
        />

        {places.map((place) => {
          const pos = toPos(place);
          const isActive = place.country === selected;
          return (
            <button
              key={place.country}
              type="button"
              className={`travel-pin${isActive ? ' is-active' : ''}`}
              style={pos}
              aria-pressed={isActive}
              aria-label={place.country}
              onClick={() =>
                setSelected((cur) =>
                  cur === place.country ? null : place.country
                )
              }
            >
              <span className="travel-pin-dot" aria-hidden="true" />
              <span className="travel-pin-label" aria-hidden="true">
                {place.country}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
