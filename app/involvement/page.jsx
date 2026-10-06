import SectionHeader from '../components/SectionHeader';
import FieldContextDeck from '../components/FieldContextDeck';

const FIELD_CONTEXT = [
  {
    title: 'Racing through a minefield: The AI Deployment Problem',
    href: 'https://www.cold-takes.com/racing-through-a-minefield-the-ai-deployment-problem/',
  },
  {
    title: 'AI is going to run out of power',
    href: 'https://www.transformernews.ai/p/ai-will-run-out-of-power',
  },
  {
    title: 'AI systems could cover up misbehavior',
    href: 'https://metr.org/blog/2026-10-06-ai-systems-could-cover-up-misbehavior/',
  },
  {
    title: 'Does AI Progress Have A Speed Limit?',
    href: 'https://asteriskmag.com/issues/10/does-ai-progress-have-a-speed-limit',
  },
  {
    title: 'Existential Risk from Power-Seeking AI',
    href: 'https://arxiv.org/abs/2206.13353',
  },
  {
    title: 'Pacing the Frontier',
    href: 'https://pacing.tech/',
  },
  {
    title: 'Preparing for the Intelligence Explosion',
    href: 'https://www.forethought.org/research/preparing-for-the-intelligence-explosion',
  },
  {
    title: 'The Most Important Century',
    href: 'https://www.cold-takes.com/most-important-century/',
  },
  {
    title: 'The Scramble: Getting in Position to Pace the Frontier',
    href: 'https://blog.peterwildeford.com/p/the-scramble-getting-in-position',
  },
  {
    title: 'A “Morally Binding” White House Accord',
    href: 'https://thezvi.substack.com/p/a-morally-binding-white-house-accord',
  },
  {
    title: 'AI 2027',
    href: 'https://ai-2027.com/',
  },
  {
    title: 'AI 2040',
    href: 'https://ai-2040.com/',
  },
  {
    title: 'An Alien Mind',
    href: 'https://openai.com/index/an-alien-mind/',
  },
  {
    title: 'Basics of Rational Discourse',
    href: 'https://www.lesswrong.com/posts/XPv4sYrKnPzeJASuk/basics-of-rationalist-discourse',
  },
  {
    title: 'Daniel Selsam — Personal Statement on AI Risk',
    href: 'https://docs.google.com/document/d/e/2PACX-1vQNl3SEX5IyA6d9qHjjFZN-qzGRZNFI6b63g-yu1Fy-ZYkVfCWm7i9WXRXw63m6yDB_auDuPLyQ7jBm/pub',
  },
  {
    title: 'For Democracy, Against Handoff',
    href: 'https://forum.effectivealtruism.org/posts/Tamg8ud99r3yRYgGg/for-democracy-against-handoff',
  },
  {
    title: 'How to get into AI Safety in 3 months',
    href: 'https://80000hours.org/2026/09/how-to-get-into-ai-safety-in-three-months/',
  },
  {
    title: 'If Anyone Builds It, Everyone Dies',
    href: 'https://ifanyonebuildsit.com/',
  },
  {
    title: 'If you remember one AI disaster, make it this one',
    href: 'https://www.youtube.com/watch?v=r_9wkavYt4Y',
  },
  {
    title: 'Intro to Effective Altruism',
    href: 'https://www.effectivealtruism.org/articles/introduction-to-effective-altruism',
  },
  {
    title: 'Prospecting for Gold',
    href: 'https://forum.effectivealtruism.org/posts/YY6PSor7TAZdyFRQi/prospecting-for-gold-owen-cotton-barratt',
  },
  {
    title: 'So you’re considering AI Safety',
    href: 'https://aisafety.info/',
  },
  {
    title: 'The case for multi-decade AI Timelines',
    href: 'https://epochai.substack.com/p/the-case-for-multi-decade-ai-timelines',
  },
  {
    title: 'The Rise and Fall of Agent Civilizations',
    href: 'https://www.dwarkesh.com/p/openai-huggingface',
  },
  {
    title: 'Transformers, the Tech behind LLMs',
    href: 'https://www.youtube.com/watch?v=wjZofJX0v4M',
  },
  {
    title: 'We’re Not Ready for Superintelligence (AI 2027)',
    href: 'https://www.youtube.com/watch?v=5KVDDfAkRgc',
  },
  {
    title: 'Why agent swarms could be the next “scaling law”',
    href: 'https://www.understandingai.org/p/why-agent-swarms-could-be-the-next',
  },
  {
    title: 'Why are we sprinting off the AI cliff?',
    href: 'https://www.youtube.com/watch?v=fjZ90V_JREk',
  },
  {
    title: 'You Need a Theory of Victory',
    href: 'https://firstscattering.com/p/you-need-a-theory-of-victory',
  },
  {
    title: 'You should, unfortunately, really be worried about Sam Altman',
    href: 'https://www.youtube.com/watch?v=_eYTkvZqbnQ',
  },
];

export default function Involvement() {
  return (
    <main>
      <SectionHeader slug="involvement" />
      <article className="entries">
        <div className="platform">
          <p className="group-label">Field Context</p>
          <FieldContextDeck items={FIELD_CONTEXT} />
        </div>

        <div className="entry platform" id="ai-safety-uci">
          <h2 className="who">
            Member <em>— AI Safety at UCI</em>
          </h2>
          <p className="when">September 2026 – Present</p>
          <div className="body">
            <ul>
              <li>
                Attend club meetings to discuss and keep up with the latest AI
                news, research, and writing in the field
              </li>
              <li>
                Network with members and the broader AI safety community
              </li>
              <li>
                Work with the group on possible solutions to the problems the
                field is facing
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform" id="sigma-pi">
          <h2 className="who">
            Committee Chairman <em>— Sigma Pi Fraternity</em>
          </h2>
          <p className="when">January 2025 – Present</p>
          <div className="body">
            <ul>
              <li>
                Coordinate meetings and develop strategies to improve chapter
                performance in the job market, academia, and other areas
              </li>
              <li>
                Collaborate with members and alumni to organize events and
                other chapter activities
              </li>
              <li>Alumni Network Chairman</li>
              <li>Scholarship Chairman</li>
              <li>Active Member</li>
            </ul>
          </div>
        </div>

        <div className="entry platform" id="private-tutor">
          <h2 className="who">
            Private Tutor <em>— Self-employed</em>
          </h2>
          <p className="when">August 2023 – January 2024</p>
          <div className="body">
            <ul>
              <li>
                Provided one-on-one assistance to elementary and middle school
                students with homework, studying, and general school-related
                struggles
              </li>
              <li>
                Supported students with learning disabilities and made
                accommodations based on each student&apos;s personal needs
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform" id="vons">
          <h2 className="who">
            Courtesy Clerk <em>— Vons</em>
          </h2>
          <p className="when">February 2023 – July 2023</p>
          <div className="body">
            <ul>
              <li>Assisted customers with shopping needs and services</li>
              <li>
                Maintained sanitation of the store and surrounding perimeter
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
