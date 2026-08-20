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
          loading="eager"
          decoding="async"
        />
        <div className="hero-text">
          <div className="hero-label">Computer Science | UC Irvine</div>
          <h1 className="hero-title">Ali Eldaoushy</h1>
          <p className="hero-description">
            Hi, I'm Ali Eldaoushy, I'm a Computer Science major at UCI with a
            passion for technology and problem-solving. I love building
            things—whether it's a on the web or in an efficient backend system. My
            skills in C++, Python, and JavaScript allow me to work across the
            stack, and I'm very eager to learn new tools and technologies.
          </p>
          <p className="hero-description">
            I'm open to opportunities in software development, especially full-stack web development, but I'm excited
            by anything that challenges me to innovate, create, and grow. Let's connect and see if we can build
            something together! Please send me a message or reach out to me if you have any questions, my email is
            aeldaoushy1@gmail.com
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
              href="https://mail.google.com/mail/u/0/?to=aeldaoushy1@gmail.com&su=Contact%20from%20Portfolio&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
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
