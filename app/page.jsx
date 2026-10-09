import SocialNotes from './components/SocialNotes';
import HeroPortrait from './components/HeroPortrait';
import CareerTimeline from './components/CareerTimeline';

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ali Eldaoushy | Personal Portfolio',
    description: 'Explore the projects, experience, education, and interests of Ali Eldaoushy (alieldaoushy).',
    url: '/',
    siteName: 'Ali Eldaoushy',
    type: 'website',
  },
};

const profile = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: 'https://alieldaoushy.com',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://alieldaoushy.com/#ali',
    name: 'Ali Eldaoushy',
    alternateName: 'alieldaoushy',
    url: 'https://alieldaoushy.com',
    image: 'https://alieldaoushy.com/profile.png',
    sameAs: [
      'https://www.linkedin.com/in/alieldaoushy',
      'https://github.com/alieldaoushyuci',
      'https://substack.com/@alieldaoushy',
    ],
  },
};

export default function Home() {
  const profileSrc = '/profile.png';

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, '\\u003c') }} />
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
