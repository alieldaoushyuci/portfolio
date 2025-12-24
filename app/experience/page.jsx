export default function Experience() {
    return (
        <section style={{ padding: '2rem' }}>
            <div className="education-container">
                <div className="education-card">
                    <h1>Experience</h1>
                    <div className="experience-section">
                        <div className="experience-item">
                            <h2 className="experience-company">Office Of Information Technology, UC Irvine</h2>
                            <p className="experience-location">Irvine, CA</p>
                            <div className="experience-role">
                                <p className="experience-title">Software Development Intern</p>
                                <p className="experience-date">June 2025 – Present</p>
                            </div>
                            <div className="experience-list">
                                <ul>
                                    <li>Developed front-end and back-end components for student management systems, delivering enhanced UI and functionality</li>
                                    <li>Implemented interactive React components with reactive layouts and advanced state management for user input handling</li>
                                    <li>Built and debugged APIs for student data retrieval and persistence, ensuring accurate integration with campus systems</li>
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
                            <p className="experience-location">San Francisco, CA</p>
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