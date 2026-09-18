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
      title: 'Letters From a Stoic',
      author: 'Seneca',
      cover: '/portfolio/books/letters-from-a-stoic.jpg',
    },
    {
      title: 'If Anyone Builds It, Everyone Dies',
      author: 'Eliezer Yudkowsky & Nate Soares',
      cover: '/portfolio/books/if-anyone-builds-it.jpg',
    },
  ],
  planned: [
    {
      title: 'The Art of Living',
      author: 'Epictetus',
      cover: '/portfolio/books/the-art-of-living.jpg',
    },
    {
      title: "Man's Search for Meaning",
      author: 'Viktor E. Frankl',
      cover: '/portfolio/books/mans-search-for-meaning.jpg',
    },
    {
      title: 'Musicophilia: Tales of Music and the Brain',
      author: 'Oliver Sacks',
      cover: '/portfolio/books/musicophilia.jpg',
    },
  ],
  finished: [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: '/portfolio/books/atomic-habits.jpg',
    },
    {
      title: 'Building a Second Brain',
      author: 'Tiago Forte',
      cover: '/portfolio/books/building-a-second-brain.jpg',
    },
    {
      title: 'The Allegory of the Cave',
      author: 'Plato',
      cover: '/portfolio/books/allegory-of-the-cave.jpg',
    },
  ],
};

export default function ReadingShelf() {
  const [active, setActive] = useState('now');

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
            onClick={() => setActive(tab.id)}
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
            <ul className="reading-books">
              {BOOKS[tab.id].map((book) => (
                <li key={book.title} className="reading-book">
                  <div className="reading-cover">
                    {book.cover ? (
                      <img src={book.cover} alt={`${book.title} cover`} />
                    ) : (
                      <span>Cover</span>
                    )}
                  </div>
                  <div className="reading-meta">
                    <span className="book-title">{book.title}</span>
                    {book.author ? (
                      <span className="book-author">{book.author}</span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
