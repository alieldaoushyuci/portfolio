'use client';

import { useState } from 'react';

const TABS = [
  { id: 'now', label: 'Reading now' },
  { id: 'planned', label: 'Planned reads' },
  { id: 'finished', label: 'Finished reads' },
];

const BOOKS = {
  now: [
    {
      title: 'The Art of Living',
      author: 'Epictetus',
      cover: '/books/the-art-of-living.jpg',
    },
    {
      title: "Man's Search for Meaning",
      author: 'Viktor E. Frankl',
      cover: '/books/mans-search-for-meaning.jpg',
    },
  ],
  planned: [
    {
      title: 'Musicophilia: Tales of Music and the Brain',
      author: 'Oliver Sacks',
      cover: '/books/musicophilia.jpg',
    },
    {
      title: '80,000 Hours',
      author: 'Benjamin Todd',
      cover: '/books/80000-hours.jpg',
    },
    {
      title: 'The 7 Habits of Highly Effective People',
      author: 'Stephen R. Covey',
      cover: '/books/the-7-habits.jpg',
    },
  ],
  finished: [
    {
      title: 'Letters From a Stoic',
      author: 'Seneca',
      cover: '/books/letters-from-a-stoic.jpg',
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: '/books/atomic-habits.jpg',
    },
    {
      title: 'Building a Second Brain',
      author: 'Tiago Forte',
      cover: '/books/building-a-second-brain.jpg',
    },
    {
      title: 'If Anyone Builds It, Everyone Dies',
      author: 'Eliezer Yudkowsky & Nate Soares',
      cover: '/books/if-anyone-builds-it.jpg',
    },
  ],
};

export default function ReadingShelf() {
  const [active, setActive] = useState('now');
  const [pulled, setPulled] = useState(null);

  const books = BOOKS[active];
  const selected = books.find((b) => b.title === pulled) || null;

  return (
    <div className="reading-shelf">
      <div className="reading-tabs" role="tablist" aria-label="Reading lists">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`reading-tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`reading-panel-${tab.id}`}
            className={active === tab.id ? 'is-active' : undefined}
            onClick={() => {
              setActive(tab.id);
              setPulled(null);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {TABS.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`reading-panel-${tab.id}`}
          aria-labelledby={`reading-tab-${tab.id}`}
          hidden={active !== tab.id}
          className="reading-panel"
        >
          {BOOKS[tab.id].length === 0 ? (
            <p className="reading-empty">No books in this list yet.</p>
          ) : (
            <div className="bookshelf">
              <p className="bookshelf-caption">Click to pull from shelf</p>
              <div className="bookshelf-ledge" aria-hidden="true" />
              <ul className="bookshelf-row">
                {BOOKS[tab.id].map((book) => {
                  const isPulled = pulled === book.title;
                  return (
                    <li key={book.title}>
                      <button
                        type="button"
                        className={`bookshelf-book${isPulled ? ' is-pulled' : ''}`}
                        aria-pressed={isPulled}
                        aria-label={book.title}
                        onClick={() =>
                          setPulled((cur) =>
                            cur === book.title ? null : book.title
                          )
                        }
                      >
                        {book.cover ? (
                          <img src={book.cover} alt="" draggable={false} />
                        ) : (
                          <span className="bookshelf-blank">Book</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}

      {selected ? (
        <div className="bookshelf-detail" aria-live="polite">
          <div className="bookshelf-detail-cover">
            {selected.cover ? (
              <img src={selected.cover} alt="" />
            ) : null}
          </div>
          <div className="bookshelf-detail-meta">
            <span className="book-title">{selected.title}</span>
            {selected.author ? (
              <span className="book-author">{selected.author}</span>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
