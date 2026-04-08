export default function Projects() {
  return (
    <section style={{ padding: '2rem' }}>
      <div className="education-container">
        <div className="education-card">
          <h1>Projects</h1>
          <div className="experience-section">
            <div className="experience-item">
              <h2 className="experience-company">HomePilot – AI Powered Rental Copilot</h2>
              <div className="experience-role">
                <p className="experience-title">Groq, PostgreSQL, React, Supabase, TypeScript, Vercel</p>
                <p className="experience-date">February 2026 – March 2026</p>
              </div>
              <div className="experience-list">
                <ul>
                  <li>Architected and deployed a full-stack rental platform that aggregates live Zillow listings, computes personalized match scores, and generates AI-driven recommendations for renters</li>
                  <li>Built a web-scraping pipeline using third-party APIs to parse data into JSON with multi-layer extraction and in-memory implementation</li>
                  <li>Designed a PostgreSQL trigger-chain architecture with auto-provisioning user data to enforce strict per-user access policies</li>
                  <li>Integrated Groq to generate listing-tailored cover letters, structured improvement feedback, and contextual recommendation insights</li>
                </ul>
              </div>
              <div className="project-buttons">
                <a
                  href="https://v0-homepilot.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Ivan-Shishkin-Dev/HomePilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button github-button"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="experience-section">
            <div className="experience-item">
              <h2 className="experience-company">Agonus AI – AI-Based Crypto Trading Platform</h2>
              <div className="experience-role">
                <p className="experience-title">FastAPI, React, SQLAlchemy, Viem, Wagmi</p>
                <p className="experience-date">September 2025 – February 2026</p>
              </div>
              <div className="experience-list">
                <ul>
                  <li>Built smart contract interaction hooks enabling users to place wagers, fetch live tournament data, and claim winnings with real-time on-chain state updates</li>
                  <li>Designed and integrated backend schema using SQLAlchemy to persist tournament and user activity for scalable service operation</li>
                  <li>Implemented blockchain wallet authentication using Wagmi and WalletConnect, allowing users to sign in with supported Base networks</li>
                </ul>
              </div>
              <div className="project-buttons">
                <a
                  href="https://github.com/blockchainuci/Agonus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button github-button"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="experience-section">
            <div className="experience-item">
              <h2 className="experience-company">GRAMS – Graduate Academic Management System</h2>
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
