import SectionHeader from '../components/SectionHeader';

export default function Skills() {
  const universalSkills = [
    'Communication',
    'Dedication',
    'Follow-through',
    'Leadership',
    'Organization',
  ];
  const frontEndSkills = [
    'CSS',
    'HTML',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Tkinter',
    'TypeScript',
  ];
  const backEndSkills = [
    'AWS',
    'Azure',
    'C++',
    'Flask',
    'Go',
    'Java',
    'PostgreSQL',
    'Python',
    'REST APIs',
    'SQL',
    'SQLAlchemy',
    'Supabase',
  ];
  const toolsSkills = [
    'Git',
    'IntelliJ',
    'JSON',
    'PyCharm',
    'R',
    'Vercel',
    'Visual Studio Code',
    'Vitest',
  ];
  const conceptSkills = [
    'CI/CD Pipelines',
    'Object-Oriented Programming',
    'Root Cause Analysis',
    'Software Development Lifecycle',
    'Unit Testing',
    'Web Development',
  ];

  return (
    <main>
      <SectionHeader slug="skills" />
      <article>
        <div className="skill-groups">
          <div className="skill-group platform">
            <h2>Universal</h2>
            <ul className="skill-list">
              {universalSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-group platform">
            <h2>Front-End</h2>
            <ul className="skill-list">
              {frontEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-group platform">
            <h2>Back-End</h2>
            <ul className="skill-list">
              {backEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-group platform">
            <h2>Tools</h2>
            <ul className="skill-list">
              {toolsSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-group platform">
            <h2>Concepts</h2>
            <ul className="skill-list">
              {conceptSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-group platform">
            <h2>Certifications</h2>
            <ul className="cert-list">
              <li>Future of AI (Issued by BlueDot Foundation)</li>
              <li>Networking and Cybersecurity (William S. Hart District)</li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
