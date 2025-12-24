import './styles/HomePage.css';

export default function Home() {
  const profileSrc = '/portfolio/profile.png';

  return (
    <section className="home-page">
      <div className="hero-card">
        <img
          className="hero-avatar"
          src={profileSrc}
          alt="Ali Eldaoushy portrait"
        />
        <div className="hero-text">
          <div className="hero-label">Computer Science | UC Irvine</div>
          <h1 className="hero-title">Ali Eldaoushy</h1>
          <p className="hero-description">
            Hello, I'm Ali Eldaoushy! I'm a Computer Science major at UCI with a
            passion for technology and problem-solving. I love building
            things, whether it's on the web or in an efficient backend system. My
            skills in C++, Python, and JavaScript allow me to work across the
            stack, and I'm very eager to learn new tools and technologies. Please reach out to me if you have any questions or opportunities.
          </p>
          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/alieldaoushy"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin-button"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alieldaoushyuci"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github-button"
            >
              GitHub
            </a>
            <a
              href="mailto:aeldaoushy1@gmail.com"
              className="social-button email-button"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
