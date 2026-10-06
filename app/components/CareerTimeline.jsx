import Link from 'next/link';
import { career, KIND_LABEL } from '@/data/career';

const MAX_GAP_MONTHS = 8;

function monthIndex(start) {
  const [year, month] = start.split('-').map(Number);
  return year * 12 + month - 1;
}

function buildRows(items) {
  const rows = [];
  let prev = null;
  for (const item of items) {
    const year = item.start.slice(0, 4);
    const gap = prev
      ? Math.min(monthIndex(prev.start) - monthIndex(item.start), MAX_GAP_MONTHS)
      : 0;
    if (!prev || prev.start.slice(0, 4) !== year) {
      rows.push({ type: 'year', key: `year-${year}`, year, gap });
      rows.push({ type: 'item', key: item.id, item, gap: 0 });
    } else {
      rows.push({ type: 'item', key: item.id, item, gap });
    }
    prev = item;
  }
  return rows;
}

export default function CareerTimeline() {
  const rows = buildRows(career);

  return (
    <nav className="career-timeline platform" aria-label="Professional timeline">
      <h2 className="career-heading">Professional Timeline</h2>
      <ul className="career-legend" aria-hidden="true">
        {Object.entries(KIND_LABEL).map(([kind, label]) => (
          <li key={kind} className={`career-item is-${kind}`}>
            <span className="career-dot" />
            {label}
          </li>
        ))}
      </ul>
      <ol className="career-list">
        {rows.map((row) =>
          row.type === 'year' ? (
            <li
              key={row.key}
              className="career-year"
              style={{ '--gap': row.gap }}
              aria-hidden="true"
            >
              <span className="career-year-label">{row.year}</span>
              <span className="career-year-tick" />
              <span className="career-year-rule" />
            </li>
          ) : (
            <li
              key={row.key}
              className={`career-item is-${row.item.kind}`}
              style={{ '--gap': row.gap }}
            >
              <Link href={row.item.href} className="career-link">
                <span className="career-date">{row.item.date}</span>
                <span className="career-dot" aria-hidden="true" />
                <span className="career-text">
                  <span className="career-title">{row.item.title}</span>
                  <span className="career-org">{row.item.org}</span>
                </span>
                <span className="career-kind">{KIND_LABEL[row.item.kind]}</span>
              </Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}
