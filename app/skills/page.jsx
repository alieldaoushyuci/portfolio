import SectionHeader from '../components/SectionHeader';
import SkillGroup from '../components/SkillGroup';

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
        <p className="skill-hint">
          Skills with a number show where I&apos;ve used them. Tap one to see
          linked projects and roles.
        </p>
        <div className="skill-groups">
          <SkillGroup title="Universal" skills={universalSkills} />

          <SkillGroup title="Front-End" skills={frontEndSkills} />

          <SkillGroup title="Back-End" skills={backEndSkills} />

          <SkillGroup title="Tools" skills={toolsSkills} />

          <SkillGroup title="Concepts" skills={conceptSkills} />

          <div className="skill-group platform">
            <h2>Certifications</h2>
            <ul className="cert-list">
              <li>Future of AI (BlueDot Foundation)</li>
              <li>Networking and Cybersecurity (William S. Hart District)</li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
