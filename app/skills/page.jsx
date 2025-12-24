export default function Skills() {
    const frontEndSkills = ['CSS', 'HTML', 'JavaScript', 'React', 'Tkinter'];
    const backEndSkills = ['C++', 'Flask', 'Python', 'SQL', 'SQLite'];
    const toolsSkills = ['Git', 'IntelliJ', 'PyCharm', 'R', 'Visual Studio Code', 'Vitest'];

    return (
        <section style={{ padding: '2rem' }}>
            <div className="education-container">
                <div className="education-card">
                    <h1>Skills</h1>
                    
                    <div className="skills-overall-container">
                        <div className="skills-section">
                            <h2 className="skills-section-title">Front-End</h2>
                            <div className="skills-buttons-container">
                                {frontEndSkills.map((skill, index) => (
                                    <div key={index} className="skill-button">{skill}</div>
                                ))}
                            </div>
                        </div>

                        <div className="skills-section">
                            <h2 className="skills-section-title">Back-End</h2>
                            <div className="skills-buttons-container">
                                {backEndSkills.map((skill, index) => (
                                    <div key={index} className="skill-button">{skill}</div>
                                ))}
                            </div>
                        </div>

                        <div className="skills-section">
                            <h2 className="skills-section-title">Tools</h2>
                            <div className="skills-buttons-container">
                                {toolsSkills.map((skill, index) => (
                                    <div key={index} className="skill-button">{skill}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="certification-section">
                        <h2 className="skills-section-title">Certifications</h2>
                        <div className="certification-item">Networking and Cybersecurity (Issued by the William S. Hart District May 2024)</div>
                    </div>
                </div>
            </div>
        </section>
    );
}