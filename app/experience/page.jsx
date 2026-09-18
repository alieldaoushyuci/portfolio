import SectionHeader from '../components/SectionHeader';

export default function Experience() {
  return (
    <main>
      <SectionHeader slug="experience" />
      <article className="entries">
        <p className="group-label">Industry</p>

        <div className="entry platform">
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
                Configured and deployed REST APIs to connect platform features
                with external services, enabling seamless data exchange across
                systems
              </li>
              <li>
                Diagnosed and resolved database issues including query
                inefficiencies and data integrity failures, restoring system
                reliability
              </li>
              <li>
                Built responsive user-facing storefront pages with focus on
                performance, layout precision, and polished user experience
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform">
          <h2 className="who">
            Full-Stack Software Engineer (Contract){' '}
            <em>— Pacific Coast Industrial Installers</em>
          </h2>
          <p className="when">November 2025 – Present</p>
          <div className="body">
            <ul>
              <li>
                Architecting full-stack mobile app in React, enabling contractors
                to verify insurance and certification compliance before job-site
                entry
              </li>
              <li>
                Built core authentication and user onboarding using AWS and
                Supabase, storing user data securely and enforcing strict access
                policies
              </li>
              <li>
                Designed upload and verification workflows allowing workers to
                import certificates with metadata extraction and expiration
                tracking
              </li>
              <li>
                Integrated third-party verification APIs to validate policy
                information against trusted external providers
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform">
          <h2 className="who">
            Software Development Intern{' '}
            <em>— Office Of Information Technology, UC Irvine</em>
          </h2>
          <p className="when">June 2025 – June 2026</p>
          <div className="body">
            <ul>
              <li>
                Developed front-end and back-end components for student
                management systems, delivering enhanced UI and functionality
              </li>
              <li>
                Built and debugged APIs for student data retrieval and
                persistence, ensuring accurate integration with campus systems
              </li>
              <li>
                Implemented interactive React components with reactive layouts
                and advanced state management for user input handling
              </li>
              <li>
                Located and resolved functional issues across table rendering,
                form validation, and modal interactions, improving system
                usability
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform">
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

        <p className="group-label">Involvement</p>

        <div className="entry platform">
          <h2 className="who">
            Committee Chairman <em>— Sigma Pi Fraternity</em>
          </h2>
          <p className="when">January 2025 – Present</p>
          <div className="body">
            <ul>
              <li>Alumni Network Chairman</li>
              <li>Scholarship Chairman</li>
              <li>Active Member</li>
            </ul>
          </div>
        </div>

        <div className="entry platform">
          <h2 className="who">
            Private Tutor <em>— Self-employed</em>
          </h2>
          <p className="when">August 2023 – January 2024</p>
          <div className="body">
            <ul>
              <li>
                Provided one-on-one assistance to elementary and middle school
                students with homework, studying, and general school-related
                struggles
              </li>
              <li>
                Supported students with learning disabilities and made
                accommodations based on each student&apos;s personal needs
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform">
          <h2 className="who">
            Courtesy Clerk <em>— Vons</em>
          </h2>
          <p className="when">February 2023 – July 2023</p>
          <div className="body">
            <ul>
              <li>Assisted customers with shopping needs and services</li>
              <li>
                Maintained sanitation of the store and surrounding perimeter
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
