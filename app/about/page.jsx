export default function About() {
  return (
    <section style={{ padding: '2rem' }}>
      <div className="education-container">
        <div className="education-card">
          <h1>About Me</h1>
          <p className="hero-description" style={{ marginBottom: '2rem' }}>
            I'm a software developer passionate about clean design and reliable systems.
          </p>
        </div>

        <div className="education-card">
          <h2 className="list-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>My Values</h2>
          <p className="hero-description">This is the values section</p>
        </div>

        <div className="education-card">
          <h2 className="list-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>My Interests</h2>
          <p className="hero-description">This is the interests section</p>
        </div>

        <div className="education-card">
          <h2 className="list-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>My Journey</h2>
          <p className="hero-description">This is the journey section</p>
        </div>
      </div>
    </section>
  );
}
