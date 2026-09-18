import SocialNotes from './components/SocialNotes';

export default function Home() {
  const profileSrc = '/portfolio/profile.png';

  return (
    <main>
      <section className="hero">
        <div className="hero-portrait">
          <img
            src={profileSrc}
            alt="Ali Eldaoushy portrait"
            loading="eager"
            decoding="async"
          />
        </div>

        <div>
          <h1 className="title">Ali Eldaoushy</h1>
          <p className="hero-bio">
            A portfolio of my character and experience, meant to show who I am
            on a level deeper than bullet points and dates. The pages ahead
            cover the work I&apos;ve done, but also the interests, habits, and
            pursuits that shape how I move through the world.
          </p>
          <SocialNotes />
        </div>
      </section>
    </main>
  );
}
