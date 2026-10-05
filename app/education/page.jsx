import SectionHeader from '../components/SectionHeader';
import DegreeProgress from '../components/DegreeProgress';

export default function Education() {
  return (
    <main>
      <SectionHeader slug="education" />
      <article className="entries">
        <div className="entry platform degree-card">
          <DegreeProgress label="June 2027" />
          <div className="degree-copy">
            <h2 className="who">University of California, Irvine</h2>
            <p className="meta">
              Bachelor of Science in Computer Science; Specialization in
              Intelligent Systems
            </p>
            <p className="meta">GPA: 3.74</p>
          </div>
        </div>

        <div className="platform">
          <p className="group-label">Relevant Coursework</p>
          <ul className="edu-list">
            <li>Data Structures and Algorithms</li>
            <li>Discrete Mathematics and Boolean Logic</li>
            <li>Introduction to Artificial Intelligence</li>
            <li>Machine Learning and Data Mining</li>
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
