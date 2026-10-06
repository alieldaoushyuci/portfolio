import SectionHeader from '../components/SectionHeader';
import CareerTimeline from '../components/CareerTimeline';

export default function Experience() {
  return (
    <main>
      <SectionHeader slug="experience" />
      <article className="entries">
        <CareerTimeline />

        <div className="entry platform" id="nomad-ecommerce">
          <h2 className="who">
            Software Development Intern <em>— Nomad eCommerce</em>
          </h2>
          <p className="when">March 2026 – Present</p>
          <div className="body">
            <ul>
              <li>
                Engineered end-to-end integration between back-end services and
                front-end interfaces, establishing reliable data flow across the
                full stack
              </li>
              <li>
                Drove custom feature work from client discovery through delivery,
                translating requirements into wireframes and technical specs, then
                building the approved features end-to-end across the database,
                APIs, and storefront UI
              </li>
              <li>
                Configured and deployed REST APIs to connect platform features
                with external services, enabling seamless data exchange across
                systems
              </li>
              <li>
                Diagnosed and resolved database issues including query
                inefficiencies and data integrity failures, restoring system
                reliability
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform" id="pacific-coast-industrial">
          <h2 className="who">
            Full-Stack Software Engineer (Contract){' '}
            <em>— Pacific Coast Industrial Installers</em>
          </h2>
          <p className="when">November 2025 – Present</p>
          <div className="body">
            <ul>
              <li>
                Architecting cross-platform application that verifies contractor
                identity, insurance, and licenses before job-site entry
              </li>
              <li>
                Led client requirements sessions with stakeholders and translated
                business needs into scalable development milestones and designing
                architecture accordingly
              </li>
              <li>
                Implemented database authentication and row-level access policies,
                building server-side verification workflows for credential data
              </li>
              <li>
                Integrated third-party APIs to validate credentials against live
                sources, with expiration tracking and QR-code sharing of user
                profiles
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform" id="uci-oit">
          <h2 className="who">
            Software Development Intern{' '}
            <em>— Office Of Information Technology, UC Irvine</em>
          </h2>
          <p className="when">June 2025 – June 2026</p>
          <div className="body">
            <ul>
              <li>
                Implemented interactive React components with reactive layouts
                and advanced state management for user input handling
              </li>
              <li>
                Built and debugged APIs for student data retrieval and
                persistence, ensuring accurate integration with campus systems
              </li>
              <li>
                Located and resolved functional issues across table rendering,
                form validation, and modal interactions, improving system
                usability
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform" id="torpedo-labs">
          <h2 className="who">
            Software Development Intern{' '}
            <em>— Torpedo Labs</em>
          </h2>
          <p className="when">May 2024 – September 2024</p>
          <div className="body">
            <ul>
              <li>
                Developed small-scaled projects in JavaScript to support
                development and provide insight on structure for larger projects
                to scale
              </li>
              <li>
                Assisted in implementing gameplay features using Unity, IntelliJ,
                and GitHub, refining mechanics and interactions
              </li>
              <li>
                Conducted testing and debugging, identifying areas for
                improvement and optimizing player experience
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
