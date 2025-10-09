export default function ProjectCard({ project }) {
  return (
    <div style={{ border: '1px solid #333', padding: '1rem', borderRadius: '8px' }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
