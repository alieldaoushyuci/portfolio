export default function Projects() {
  return (
    <section style={{ padding: '2rem' }}>
      <div className="education-container">
        <div className="education-card">
          <h1>Projects</h1>
          <div className="experience-section">
            <div className="experience-item">
              <h2 className="experience-company">Contract Verification App – Construction Compliance Platform</h2>
              <p className="experience-location">Irvine, CA</p>
              <div className="experience-role">
                <p className="experience-title">React Native, PostgreSQL, AWS S3, Clearinghouse API Integration</p>
                <p className="experience-date">November 2025 – Present</p>
              </div>
              <div className="experience-list">
                <ul>
                  <li>Architecting full-stack mobile app enabling contractors to verify worker insurance and certification compliance before job-site entry</li>
                  <li>Built core authentication and user onboarding, storing account data securely and enforcing password validation and access policies</li>
                  <li>Designed camera upload workflows allowing workers to scan or import certificates with metadata extraction and expiration tracking</li>
                  <li>Integrated clearinghouse-style insurance verification APIs to validate policy information against trusted external providers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="experience-section">
            <div className="experience-item">
              <h2 className="experience-company">Agonus AI – AI-Based Crypto Trading Platform</h2>
              <p className="experience-location">Irvine, CA</p>
              <div className="experience-role">
                <p className="experience-title">React, Wagmi, Viem, PostgreSQL, FastAPI</p>
                <p className="experience-date">September 2025 – February 2026</p>
              </div>
              <div className="experience-list">
                <ul>
                  <li>Implemented blockchain wallet authentication using Wagmi and WalletConnect, allowing users to sign in with supported Base networks</li>
                  <li>Built smart contract interaction hooks enabling users to place wagers, fetch live tournament data, and claim winnings with real-time onchain state updates</li>
                  <li>Designed and integrated backend schema using PostgreSQL and SQLAlchemy to persist tournament and user activity for scalable service operation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="experience-section">
            <div className="experience-item">
              <h2 className="experience-company">GRAMS – Graduate Academic Management System</h2>
              <p className="experience-location">Irvine, CA</p>
              <div className="experience-role">
                <p className="experience-title">IntelliJ, React, Git</p>
                <p className="experience-date">June 2025 – September 2025</p>
              </div>
              <div className="experience-list">
                <ul>
                  <li>Developed search components enabling rapid student-record queries with dynamic filtering and predictive suggestion capabilities</li>
                  <li>Built interactive data tables with sortable headers, pagination, and error handling to support large-scale datasets</li>
                  <li>Resolved flagged npm vulnerabilities by tracing impacted dependencies, upgrading libraries, and validating fixes via integration testing</li>
                  <li>Integrated front-end components with backend APIs to fetch, validate, and persist academic records from external database</li>
                  <li>Improved reliability through unit and integration testing with Vitest, validating React components across multiple use cases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
