import SectionHeader from '../components/SectionHeader';

export default function Education() {
  return (
    <main>
      <SectionHeader slug="education" />
      <article className="entries">
        <div className="entry platform">
          <p className="when">Graduating December 2027</p>
          <h2 className="who">University of California, Irvine</h2>
          <p className="meta">Bachelor of Science in Computer Science</p>
          <p className="meta">GPA: 3.74</p>
        </div>

        <div className="platform">
          <p className="group-label">Relevant Coursework</p>
          <ul className="edu-list">
            <li>Advanced Programming in Python</li>
            <li>Data Structures and Algorithms</li>
            <li>Discrete Mathematics and Boolean Logic</li>
            <li>Introduction to Artificial Intelligence</li>
            <li>Programming in C++ as a Second Language</li>
            <li>Software Libraries and Networks</li>
          </ul>
        </div>

        <div className="platform">
          <p className="group-label">Extracurricular Involvement</p>
          <ul className="edu-list">
            <li>AI Safety at UCI</li>
            <li>Blockchain at UCI</li>
            <li>Campuswide Honors Collegium</li>
            <li>ICS Student Council</li>
            <li>Muslim Student Union</li>
            <li>Sigma Pi Fraternity</li>
            <li>Triathlon Club</li>
          </ul>
        </div>

        <div className="platform">
          <p className="group-label">Honors</p>
          <ul className="edu-list">
            <li>Dean&apos;s List</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
