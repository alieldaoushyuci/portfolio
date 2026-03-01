export default function Education() {
    return (
        <section style={{ padding: '2rem' }}>
            <div className="education-container">
                <div className="education-card">
                    <h1>Education</h1>
                    <div className="education-section">
                        <h2 className="education-institution">University of California, Irvine</h2>
                        <p className="education-location">Irvine, CA</p>
                        <div className="education-details">
                            <p className="education-degree">Bachelor of Science in Computer Science; Specialization in Intelligient Systems</p>
                            <p className="education-date">Graduation Date: June 2027</p>
                            <p className="education-gpa">GPA: 3.67</p>
                        </div>
                        <div className="education-list">
                            <h3 className="list-title">Relevant Courses:</h3>
                            <ul>
                                <li>Advanced Programming in Python</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Discrete Mathematics and Boolean Logic</li>
                                <li>Programming in C++ as a Second Language</li>
                                <li>Software Libraries and Networks</li>
                            </ul>
                        </div>
                        <div className="education-list">
                            <h3 className="list-title">Extracurricular Involvement:</h3>
                            <ul>
                                <li>Blockchain at UCI</li>
                                <li>Hack at UCI</li>
                                <li>ICS Student Council</li>
                                <li>Muslim Student Union</li>
                                <li>Sigma Pi Fraternity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}