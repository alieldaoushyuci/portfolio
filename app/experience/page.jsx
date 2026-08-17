export default function Experience() {
    return (
        <section style={{ padding: '2rem' }}>
            <div className="education-container">
                <div className="education-card">
                    <h1>Experience</h1>
                    <div className="experience-section">
                        <div className="experience-item">
                            <h2 className="experience-company">Nomad eCommerce</h2>
                            <div className="experience-role">
                                <p className="experience-title">Software Development Intern</p>
                                <p className="experience-date">March 2026 – Present</p>
                            </div>
                            <div className="experience-list">
                                <ul>
                                    <li>Engineered end-to-end integration between back-end services and front-end interfaces, establishing reliable data flow across the full stack</li>
                                    <li>Configured and deployed REST APIs to connect platform features with external services, enabling seamless data exchange across systems</li>
                                    <li>Diagnosed and resolved database issues including query inefficiencies and data integrity failures, restoring system reliability</li>
                                    <li>Built responsive user-facing storefront pages with focus on performance, layout precision, and polished user experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education-card">
                    <div className="experience-section">
                        <div className="experience-item">
                            <h2 className="experience-company">Pacific Coast Industrial Installers</h2>
                            <div className="experience-role">
                                <p className="experience-title">Full-Stack Software Engineer (Contract)</p>
                                <p className="experience-date">November 2025 – Present</p>
                            </div>
                            <div className="experience-list">
                                <ul>
                                    <li>Architecting full-stack mobile app in React, enabling contractors to verify insurance and certification compliance before job-site entry</li>
                                    <li>Built core authentication and user onboarding using AWS and Supabase, storing user data securely and enforcing strict access policies </li>
                                    <li>Designed upload and verification workflows allowing workers to import certificates with metadata extraction and expiration tracking</li>
                                    <li>Integrated third-party verification APIs to validate policy information against trusted external providers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education-card">
                    <div className="experience-section">
                        <div className="experience-item">
                            <h2 className="experience-company">Office Of Information Technology, UC Irvine</h2>
                            <div className="experience-role">
                                <p className="experience-title">Software Development Intern</p>
                                <p className="experience-date">June 2025 – June 2026</p>
                            </div>
                            <div className="experience-list">
                                <ul>
                                    <li>Developed front-end and back-end components for student management systems, delivering enhanced UI and functionality</li>
                                    <li>Built and debugged APIs for student data retrieval and persistence, ensuring accurate integration with campus systems</li>
                                    <li>Implemented interactive React components with reactive layouts and advanced state management for user input handling</li>
                                    <li>Located and resolved functional issues across table rendering, form validation, and modal interactions, improving system usability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education-card">
                    <div className="experience-section">
                        <div className="experience-item">
                            <h2 className="experience-company">Torpedo Labs – Game Development and Publishing Company</h2>
                            <div className="experience-role">
                                <p className="experience-title">Software Development Intern</p>
                                <p className="experience-date">May 2024 – September 2024</p>
                            </div>
                            <div className="experience-list">
                                <ul>
                                    <li>Developed small-scaled projects in JavaScript to support development and provide insight on structure for larger projects to scale</li>
                                    <li>Assisted in implementing gameplay features using Unity, IntelliJ, and GitHub, refining mechanics and interactions</li>
                                    <li>Conducted testing and debugging, identifying areas for improvement and optimizing player experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}