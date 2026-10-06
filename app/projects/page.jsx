import SectionHeader from '../components/SectionHeader';

export default function Projects() {
  return (
    <main>
      <SectionHeader slug="projects" />
      <article className="entries">
        <div className="entry platform" id="homepilot">
          <p className="when">February 2026 – March 2026</p>
          <h2 className="who">HomePilot – AI Powered Rental Copilot</h2>
          <p className="meta">
            Groq, PostgreSQL, React, Supabase, TypeScript, Vercel
          </p>
          <div className="body">
            <ul>
              <li>
                Architected a full-stack rental platform that aggregates live
                property listings and generates AI-driven recommendations for
                users
              </li>
              <li>
                Built a web-scraping pipeline using third-party APIs to parse data
                into JSON with multi-layer extraction and in-memory implementation
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

        <div className="entry platform" id="agonus-ai">
          <p className="when">September 2025 – February 2026</p>
          <h2 className="who">Agonus AI – AI-Based Crypto Trading Platform</h2>
          <p className="meta">AWS, FastAPI, React, SQLAlchemy, Viem, Wagmi</p>
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

        <div className="entry platform" id="grams">
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

        <div className="entry platform" id="data-management-system">
          <h2 className="who">Data Management System</h2>
          <p className="meta">Flask, PyCharm</p>
          <div className="body">
            <ul>
              <li>
                Built a modular engine processing continent, country, and region
                data with full search, load, and save functionality
              </li>
              <li>
                Integrated GUI with event-driven architecture and custom
                scheduling to manage interface-state interactions
              </li>
              <li>
                Connected database schema to user interface, enabling robust
                state persistence and error feedback upon user interaction
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform" id="distributed-systems-simulation">
          <h2 className="who">Distributed Systems Simulation</h2>
          <p className="meta">Go, Python, Tkinter</p>
          <div className="body">
            <ul>
              <li>
                Developed a simulation modeling system supported by device
                propagation of alerts and cancellations through scheduled events
              </li>
              <li>
                Implemented priority queue management and event-driven
                simulation techniques to ensure correct message ordering
              </li>
              <li>
                Built modular classes handling device interactions, alert
                transmission, cancellations, and dynamic event scheduling
              </li>
              <li>
                Utilized Python frameworks such as heapq, itertools, and
                custom-designed event schedulers to execute simulations
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
