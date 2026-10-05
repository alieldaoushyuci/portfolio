export default function SectionHeader({ slug }) {
  const sections = {
    about: {
      title: 'About',
      eyebrow: "My pursuits, hobbies, and interests that don't show up on a resume",
    },
    education: { title: 'Education', eyebrow: 'School and coursework' },
    experience: { title: 'Experience', eyebrow: 'Jobs and internships' },
    involvement: {
      title: 'Involvement',
      eyebrow: 'Organizations, work, and field context',
    },
    projects: { title: 'Projects', eyebrow: "Some work that I'm proud of" },
    skills: { title: 'Skills', eyebrow: 'Tools and concepts' },
  };

  const s = sections[slug];
  if (!s) return null;

  return (
    <header className="section-head">
      <h1>{s.title}</h1>
      <p className="eyebrow">{s.eyebrow}</p>
    </header>
  );
}
