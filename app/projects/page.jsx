import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Projects</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
