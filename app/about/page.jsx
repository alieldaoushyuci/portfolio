import SectionHeader from '../components/SectionHeader';
import ReadingShelf from '../components/ReadingShelf';
import PursuitVideos from '../components/PursuitVideos';
import {
  IronmanPixel,
  BookPixel,
  RecordPixel,
  TravelPixel,
  PursuitsPixel,
} from '../components/PixelIcons';

const albums = [
  {
    title: 'Weird Fishes',
    artist: 'Radiohead',
    cover: '/portfolio/albums/weird-fishes.jpg',
  },
  {
    title: 'Wish You Were Here',
    artist: 'Pink Floyd',
    cover: '/portfolio/albums/wish-you-were-here.jpg',
  },
  {
    title: 'Channel Orange',
    artist: 'Frank Ocean',
    cover: '/portfolio/albums/channel-orange.jpg',
  },
  {
    title: 'By The Way',
    artist: 'Red Hot Chili Peppers',
    cover: '/portfolio/albums/by-the-way.jpg',
  },
  {
    title: 'Bloom',
    artist: 'RÜFÜS DU SOL',
    cover: '/portfolio/albums/bloom.jpg',
  },
  {
    title: "Let's Get It On",
    artist: 'Marvin Gaye',
    cover: '/portfolio/albums/lets-get-it-on.jpg',
  },
  {
    title: 'The New Abnormal',
    artist: 'The Strokes',
    cover: '/portfolio/albums/the-new-abnormal.jpg',
  },
  {
    title: 'Case Study 01',
    artist: 'Daniel Caesar',
    cover: '/portfolio/albums/case-study-01.jpg',
  },
  {
    title: "Let's Stay Together",
    artist: 'Al Green',
    cover: '/portfolio/albums/lets-stay-together.jpg',
  },
  {
    title: 'One of These Nights',
    artist: 'The Eagles',
    cover: '/portfolio/albums/one-of-these-nights.jpg',
  },
];

const travelFavorites = [
  {
    country: 'Japan',
    src: '/portfolio/travel/japan.png',
    alt: 'Biking by a lake in Japan',
  },
  {
    country: 'Spain',
    src: '/portfolio/travel/spain.png',
    alt: 'Walking through a plaza in Spain',
  },
  {
    country: 'Egypt',
    src: '/portfolio/travel/egypt.png',
    alt: 'Looking out over the coast from a pool in Egypt',
  },
  {
    country: 'Canada',
    src: '/portfolio/travel/canada.png',
    alt: 'Standing in a forest stream in Canada',
  },
];

export default function About() {
  return (
    <main>
      <SectionHeader slug="about" />
      <article>
        <h2 className="interests-heading">Interests</h2>

        <section className="interest" id="fitness">
          <div className="interest-head">
            <span className="pixel-badge" aria-hidden="true">
              <IronmanPixel />
            </span>
            <h3>Health &amp; Fitness</h3>
          </div>
          <p>
            My whole life I grew up playing sports, having stints in soccer,
            swimming, tae kwon do, gymnastics and more. When I got to college I
            really began to enjoy more individual sports, and eventually
            completed my first half marathon in June of my second year. Since
            then I&apos;ve dived into triathlon training. Most weeks that means
            swimming, biking, running, and lifting 3 times each. Up next is the{' '}
            <a
              href="https://newportdunes.californiatriathlon.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Olympic Triathlon at Cal Tri Newport Dunes
            </a>{' '}
            on November 1, then{' '}
            <a
              href="https://www.ironman.com/races/im703-texas"
              target="_blank"
              rel="noopener noreferrer"
            >
              IRONMAN 70.3 Texas
            </a>{' '}
            on April 4.
          </p>
          <div className="platform">
            <ul className="travel-gallery">
              <li className="travel-gallery-item">
                <div className="travel-gallery-photo">
                  <img
                    src="/portfolio/fitness/fun-run.png"
                    alt="At the finish line of a fun run with friends"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="travel-gallery-item">
                <div className="travel-gallery-photo">
                  <img
                    src="/portfolio/fitness/canyon-hike.png"
                    alt="Hiking through a narrow canyon"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="travel-gallery-item">
                <div className="travel-gallery-photo">
                  <img
                    src="/portfolio/fitness/sandboard.png"
                    alt="Sandboarding down a dune"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="travel-gallery-item">
                <div className="travel-gallery-photo">
                  <img
                    src="/portfolio/fitness/ebike.png"
                    alt="Riding e-bikes through a canyon road"
                    loading="lazy"
                  />
                </div>
              </li>
            </ul>
            <p className="interest-link">
              <a
                href="https://www.strava.com/athletes/174676213"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strava →
              </a>
            </p>
          </div>
        </section>

        <section className="interest" id="music">
          <div className="interest-head">
            <span className="pixel-badge" aria-hidden="true">
              <RecordPixel />
            </span>
            <h3>Music</h3>
          </div>
          <p>
            Music has been a big part of my life for as long as I can remember. I
            really began exploring more music and curating my taste when I was a
            freshman in high school and got into skating. There was always
            something playing, either in my headphones or whatever my friends
            had on, and since then it&apos;s been one of the most influential
            aspects of my character.
          </p>
          <p className="group-label interest-subhead">Some of My Favorites</p>
          <div className="platform">
            <ul className="album-grid">
              {albums.map((album, i) => (
                <li key={i} className="album-card">
                  <div className="album-cover">
                    <img src={album.cover} alt={`${album.title} cover`} />
                  </div>
                  <span className="album-title">{album.title}</span>
                  <span className="album-artist">{album.artist}</span>
                </li>
              ))}
            </ul>
            <p className="interest-link">
              <a
                href="https://open.spotify.com/user/alisuper1992?si=988f150b09484eb2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify →
              </a>
            </p>
          </div>
          <p className="group-label interest-subhead">
            Personal Involvement with Music
          </p>
          <p>
            I&apos;d always been really interested in learning to play music
            myself, and grew up trying to learn guitar. Since I&apos;ve learned
            it I&apos;ve been learning how to play the piano and use studio
            tools to build and mix music.
          </p>
          <div className="platform">
            <ul className="music-gallery">
              <li className="music-gallery-item">
                <div className="music-gallery-photo">
                  <img
                    src="/portfolio/music/guitar-camping.png"
                    alt="Playing acoustic guitar at a campsite"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="music-gallery-item">
                <div className="music-gallery-photo">
                  <img
                    src="/portfolio/music/guitar-couch.png"
                    alt="Playing guitar on the couch with family"
                    loading="lazy"
                  />
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="interest" id="traveling">
          <div className="interest-head">
            <span className="pixel-badge" aria-hidden="true">
              <TravelPixel />
            </span>
            <h3>Traveling</h3>
          </div>
          <p>
            I grew up very curious about the world, and I was able to start
            venturing off on my own when I began working in high school.
            Traveling has taught me so much about other regions and ways of
            life, and I have an obsession with seeing as much of the world as I
            can. Here are some of my favorites so far.
          </p>

          <div className="platform">
            <ul className="travel-gallery">
              {travelFavorites.map((place) => (
                <li key={place.country} className="travel-gallery-item">
                  <div className="travel-gallery-photo">
                    <img
                      src={place.src}
                      alt={place.alt}
                      loading="lazy"
                      className={
                        place.country === 'Egypt' ? 'travel-egypt' : undefined
                      }
                    />
                  </div>
                  <span className="travel-gallery-label">{place.country}</span>
                </li>
              ))}
            </ul>
            <p className="interest-link">
              <a
                href="https://www.instagram.com/alieldaoushy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram →
              </a>
            </p>
          </div>
        </section>

        <section className="interest" id="reading">
          <div className="interest-head">
            <span className="pixel-badge" aria-hidden="true">
              <BookPixel />
            </span>
            <h3>Reading</h3>
          </div>
          <p>
            The pursuit of knowledge is something I&apos;ve always wanted to be
            a part of, but reading wasn&apos;t a hobby I was into as a kid. I
            picked it up as a second year in college and have been hooked on
            expanding my view ever since. Here&apos;s what I&apos;m reading now,
            what&apos;s to be started, and a few I&apos;ve already finished.
          </p>
          <div className="platform">
            <ReadingShelf />
            <p className="interest-link">
              <a
                href="https://www.goodreads.com/user/show/204111768"
                target="_blank"
                rel="noopener noreferrer"
              >
                Goodreads →
              </a>
            </p>
          </div>
        </section>

        <section className="interest" id="other-pursuits">
          <div className="interest-head">
            <span className="pixel-badge" aria-hidden="true">
              <PursuitsPixel />
            </span>
            <h3>Other Pursuits</h3>
          </div>
          <p>
            Areas and hobbies I&apos;ve picked up over the years, or things
            I&apos;m still trying to learn whenever I have free time.
          </p>
          <PursuitVideos />
        </section>
      </article>
    </main>
  );
}
