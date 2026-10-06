import { career } from '@/data/career';

const KIND_LABEL = {
  work: 'Work',
  project: 'Project',
  education: 'Education',
};

export default function CareerTimeline() {
  return (
    <nav className="career-timeline platform" aria-label="Career timeline">
      <p className="group-label">Timeline</p>
      <ol className="career-list">
        {career.map((item) => (
          <li key={item.id} className={`career-item is-${item.kind}`}>
            <a
              href={item.kind === 'work' ? `#${item.id}` : item.href}
              className="career-link"
            >
              <span className="career-date">{item.date}</span>
              <span className="career-dot" aria-hidden="true" />
              <span className="career-text">
                <span className="career-title">{item.title}</span>
                <span className="career-org">{item.org}</span>
              </span>
              <span className="career-kind">{KIND_LABEL[item.kind]}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
