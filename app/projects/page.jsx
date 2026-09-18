import SectionHeader from '../components/SectionHeader';

export default function Projects() {
  return (
    <main>
      <SectionHeader slug="projects" />
      <article className="entries">
        <div className="entry platform">
          <p className="when">February 2026 – March 2026</p>
          <h2 className="who">HomePilot – AI Powered Rental Copilot</h2>
          <p className="meta">
            Groq, PostgreSQL, React, Supabase, TypeScript, Vercel
          </p>
          <div className="body">
            <ul>
              <li>
                Architected and deployed a full-stack rental platform that
                aggregates live Zillow listings, computes personalized match
                scores, and generates AI-driven recommendations for renters
              </li>
              <li>
                Built a web-scraping pipeline using third-party APIs to parse data
                into JSON with multi-layer extraction and in-memory implementation
              </li>
              <li>
                Designed a PostgreSQL trigger-chain architecture with
                auto-provisioning user data to enforce strict per-user access
                policies
              </li>
              <li>
                Integrated Groq to generate listing-tailored cover letters,
                structured improvement feedback, and contextual recommendation
                insights
              </li>
            </ul>
          </div>
          <div className="entry-links">
            <a
              href="https://v0-homepilot.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Ivan-Shishkin-Dev/HomePilot"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="entry platform">
          <p className="when">September 2025 – February 2026</p>
          <h2 className="who">Agonus AI – AI-Based Crypto Trading Platform</h2>
          <p className="meta">FastAPI, React, SQLAlchemy, Viem, Wagmi</p>
          <div className="body">
            <ul>
              <li>
                Built smart contract interaction hooks enabling users to place
                wagers, fetch live tournament data, and claim winnings with
                real-time on-chain state updates
              </li>
              <li>
                Designed and integrated backend schema using SQLAlchemy to persist
                tournament and user activity for scalable service operation
              </li>
              <li>
                Implemented blockchain wallet authentication using Wagmi and
                WalletConnect, allowing users to sign in with supported Base
                networks
              </li>
            </ul>
          </div>
          <div className="entry-links">
            <a
              href="https://github.com/blockchainuci/Agonus"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="entry platform">
          <p className="when">June 2025 – September 2025</p>
          <h2 className="who">GRAMS – Graduate Academic Management System</h2>
          <p className="meta">IntelliJ, React, Git</p>
          <div className="body">
            <ul>
              <li>
                Developed search components enabling rapid student-record queries
                with dynamic filtering and predictive suggestion capabilities
              </li>
              <li>
                Built interactive data tables with sortable headers, pagination,
                and error handling to support large-scale datasets
              </li>
              <li>
                Resolved flagged npm vulnerabilities by tracing impacted
                dependencies, upgrading libraries, and validating fixes via
                integration testing
              </li>
              <li>
                Integrated front-end components with backend APIs to fetch,
                validate, and persist academic records from external database
              </li>
              <li>
                Improved reliability through unit and integration testing with
                Vitest, validating React components across multiple use cases
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
