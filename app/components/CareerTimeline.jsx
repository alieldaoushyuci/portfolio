import Link from 'next/link';
import { career, KIND_LABEL } from '@/data/career';

export default function CareerTimeline() {
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
        {career.map((item) => (
          <li key={item.id} className={`career-item is-${item.kind}`}>
            <Link href={item.href} className="career-link">
              <span className="career-date">{item.date}</span>
              <span className="career-dot" aria-hidden="true" />
              <span className="career-text">
                <span className="career-title">{item.title}</span>
                <span className="career-org">{item.org}</span>
              </span>
              <span className="career-kind">{KIND_LABEL[item.kind]}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
