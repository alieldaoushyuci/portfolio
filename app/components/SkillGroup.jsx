'use client';

import { useState } from 'react';
import { careerById, portfolioSite, skillUsage } from '@/data/career';

const KIND_LABEL = {
  work: 'Work',
  project: 'Project',
  education: 'Education',
};

function usageFor(skill) {
  return (skillUsage[skill] || [])
    .map((id) => (id === portfolioSite.id ? portfolioSite : careerById[id]))
    .filter(Boolean);
}

export default function SkillGroup({ title, skills }) {
  const [selected, setSelected] = useState(null);
  const used = selected ? usageFor(selected) : [];

  return (
    <div className="skill-group platform">
      <h2>{title}</h2>
      <ul className="skill-list">
        {skills.map((skill) => {
          const count = usageFor(skill).length;
          if (!count) {
            return <li key={skill}>{skill}</li>;
          }
          const isActive = selected === skill;
          return (
            <li key={skill} className="has-usage">
              <button
                type="button"
                className={`skill-chip${isActive ? ' is-active' : ''}`}
                aria-pressed={isActive}
                onClick={() => setSelected((cur) => (cur === skill ? null : skill))}
              >
                {skill}
                <span className="skill-count" aria-label={`used in ${count}`}>
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {selected ? (
        <div className="skill-usage" aria-live="polite">
          <p className="skill-usage-label">Used in</p>
          <ul>
            {used.map((item) => (
              <li key={item.id}>
                <a href={item.href}>
                  <span className="skill-usage-title">{item.title}</span>
                  <span className="skill-usage-org">{item.org}</span>
                </a>
                <span className="skill-usage-kind">{KIND_LABEL[item.kind]}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
