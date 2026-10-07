import SocialNotes from './components/SocialNotes';
import HeroPortrait from './components/HeroPortrait';
import CareerTimeline from './components/CareerTimeline';

export default function Home() {
  const profileSrc = '/portfolio/profile.png';

  return (
    <main>
      <section className="hero">
        <HeroPortrait src={profileSrc} alt="Ali Eldaoushy portrait" />

        <div>
          <h1 className="title">Ali Eldaoushy</h1>
          <p className="hero-bio">
            A portfolio of my character and experience, shaped as much by what
            I&apos;m curious about as by what I&apos;ve accomplished. The pages ahead
            cover the work I&apos;ve done, but also the interests, habits, and
            pursuits that shape how I move through the world.
          </p>
          <SocialNotes />
        </div>
      </section>

      <CareerTimeline />
    </main>
  );
}
