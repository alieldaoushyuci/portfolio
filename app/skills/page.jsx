export default function Skills() {
    return (
        <section style={{ padding: '2rem' }}>
            <div className="education-container">
                <div className="education-card">
                    <h1>Skills</h1>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3 className="skill-title">Front-End</h3>
                            <p className="skill-items">CSS, HTML, JavaScript, React, Tkinter</p>
                        </div>
                        <div className="skill-category">
                            <h3 className="skill-title">Back-End</h3>
                            <p className="skill-items">C++, Flask, Python, SQL, SQLite</p>
                        </div>
                        <div className="skill-category">
                            <h3 className="skill-title">Tools</h3>
                            <p className="skill-items">Git, IntelliJ, PyCharm, R, Visual Studio Code, Vitest</p>
                        </div>
                        <div className="skill-category">
                            <h3 className="skill-title">Concepts</h3>
                            <p className="skill-items">Software Development Lifecycle, Code Review, Documentation, Root Cause Analysis, Testing, Web Development</p>
                        </div>
                    </div>
                    <div className="certification-section">
                        <h3 className="list-title">Certifications</h3>
                        <p className="certification-item">Networking and Cybersecurity (Issued by the William S. Hart District May 2024)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}