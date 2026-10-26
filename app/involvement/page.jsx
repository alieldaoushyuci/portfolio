import SectionHeader from '../components/SectionHeader';
import { pageMetadata } from '../../src/data/seo';

export const metadata = pageMetadata("Involvement", "Ali Eldaoushy's involvement in AI Safety at UCI, student organizations, and the AI safety field.", '/involvement');
import FieldContextDeck from '../components/FieldContextDeck';

const FIELD_CONTEXT = [
  {
    "title": "A “Morally Binding” White House Accord",
    "href": "https://substack.com/inbox/post/218179351?redirect=app-store-no-desktop&inbox=true&triedRedirect=true"
  },
  {
    "title": "AI 2027",
    "href": "https://ai-2027.com/"
  },
  {
    "title": "AI 2040: Capability Scaling Strategy",
    "href": "https://ai-2040.com/supplements/capability-scaling-strategy"
  },
  {
    "title": "AI 2040: Comparing Possible Plans",
    "href": "https://ai-2040.com/supplements/comparing-possible-plans"
  },
  {
    "title": "AI Could Defeat All of Us Combined",
    "href": "https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/"
  },
  {
    "title": "AI is going to run out of power",
    "href": "https://open.substack.com/pub/transformernews/p/ai-will-run-out-of-power?r=2xf1ok"
  },
  {
    "title": "AI systems could cover up misbehavior",
    "href": "https://metr.org/blog/2026-10-06-ai-systems-could-cover-up-misbehavior/"
  },
  {
    "title": "Alignment remains a hard, unsolved problem",
    "href": "https://www.lesswrong.com/posts/epjuxGnSPof3GnMSL/alignment-remains-a-hard-unsolved-problem"
  },
  {
    "title": "An approach to Technical AGI Safety and Security",
    "href": "https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/evaluating-potential-cybersecurity-threats-of-advanced-ai/An_Approach_to_Technical_AGI_Safety_Apr_2025.pdf"
  },
  {
    "title": "Anthropic measurements for understanding the pace of AI development",
    "href": "https://www.anthropic.com/institute/measuring-pace-of-ai-development"
  },
  {
    "title": "Basics of Rational Discourse",
    "href": "https://www.lesswrong.com/posts/XPv4sYrKnPzeJASuk/basics-of-rationalist-discourse-1"
  },
  {
    "title": "Become a person who actually does things",
    "href": "https://www.neelnanda.io/blog/become-a-person-who-actually-does-things"
  },
  {
    "title": "Building a Defense-in-Depth Biosecurity Strategy for the AI Era",
    "href": "https://www.rand.org/content/dam/rand/pubs/research_reports/RRA4900/RRA4999-1/RAND_RRA4999-1.pdf"
  },
  {
    "title": "Can AI Scaling Continue Through 2030?",
    "href": "https://epoch.ai/blog/can-ai-scaling-continue-through-2030"
  },
  {
    "title": "Could we reach AGI by 2030?",
    "href": "https://80000hours.org/ai/guide/when-will-agi-arrive/"
  },
  {
    "title": "Daniel Selsam - Personal Statement on AI Risk",
    "href": "https://docs.google.com/document/d/1NRSfwBrVGWkBE24zRKOeP_Ksmx8ZRLbIwsF1k8pjDfA/edit?tab=t.0#heading=h.gousluhraia4"
  },
  {
    "title": "Extreme Power Concentration",
    "href": "https://80000hours.org/problem-profiles/extreme-power-concentration/"
  },
  {
    "title": "For Democracy, Against Handoff",
    "href": "https://forum.effectivealtruism.org/posts/Tamg8ud99r3yRYgGg/for-democracy-against-handoff"
  },
  {
    "title": "How to get into AI Safety in 3 months",
    "href": "https://80000hours.org/2026/09/how-to-get-into-ai-safety-in-3-months/"
  },
  {
    "title": "If Anyone Builds it, Everyone Dies",
    "href": "https://ifanyonebuildsit.com"
  },
  {
    "title": "If you remember one AI disaster, make it this one",
    "href": "https://youtu.be/r_9wkavYt4Y?is=I8p777Vb8mFSvQay"
  },
  {
    "title": "Intro to Effective Altruism",
    "href": "https://www.effectivealtruism.org/articles/introduction-to-effective-altruism"
  },
  {
    "title": "Introducing Better Futures",
    "href": "https://www.forethought.org/research/introducing-better-futures"
  },
  {
    "title": "METR Frontier Risk Report (Feb - March 2026)",
    "href": "https://metr.org/blog/2026-05-19-frontier-risk-report/"
  },
  {
    "title": "On Civilization-Threatening Bioweapons",
    "href": "https://docs.google.com/document/d/14TUeRD1nEFRBMczLEM3RYJTwX0AhbqkRIMbnr5vDMzk/edit?tab=t.0#heading=h.3h0owwuktuge"
  },
  {
    "title": "Plan A’s Problem with Dry Tinder",
    "href": "https://www.lesswrong.com/posts/8iDZnQwmvwuxZo3Wx/plan-a-s-problem-with-dry-tinder"
  },
  {
    "title": "Project Tailwind: Interventions",
    "href": "https://coefficientgiving.org/tailwind/initiatives/"
  },
  {
    "title": "Prospecting for Gold",
    "href": "https://www.effectivealtruism.org/articles/prospecting-for-gold-owen-cotton-barratt"
  },
  {
    "title": "Q2.5 2026 Timeline Update: Uplift and Revenue",
    "href": "https://blog.aifutures.org/p/q25-2026-timelines-update-uplift"
  },
  {
    "title": "Racing through a minefield: The AI Deployment Problem",
    "href": "https://www.cold-takes.com/racing-through-a-minefield-the-ai-deployment-problem/"
  },
  {
    "title": "Selective Optimism: A Critique of AI 2040",
    "href": "https://www.mindthefuture.info/p/selective-optimism-a-critique-of"
  },
  {
    "title": "So you’re considering AI Safety",
    "href": "https://cdn.discordapp.com/attachments/1549453922345811978/1550216952562061312/So_youre_considering_AI_Safety.pdf?ex=6aad878b&is=6aac360b&hm=0df280e36437ed461bbf68d64f86f71ef6a440db309bbf53552bb1e05e9c3852"
  },
  {
    "title": "Synthetic Data Generation for Agentic AI",
    "href": "https://www.nvidia.com/en-us/use-cases/synthetic-data-generation-for-agentic-ai/"
  },
  {
    "title": "Teaching Claude Why",
    "href": "https://www.anthropic.com/research/teaching-claude-why"
  },
  {
    "title": "The case for multi-decade AI Timelines",
    "href": "https://epochai.substack.com/p/the-case-for-multi-decade-ai-timelines"
  },
  {
    "title": "The Economics of Recursive Self Improvement",
    "href": "https://elasticity.institute/rsi-paper.pdf"
  },
  {
    "title": "The Gentle Singularity",
    "href": "https://blog.samaltman.com/the-gentle-singularity"
  },
  {
    "title": "The Intelligence Age",
    "href": "https://ia.samaltman.com/"
  },
  {
    "title": "The Loss of Control Playbook",
    "href": "https://lossofcontrol.ai/"
  },
  {
    "title": "The Most Important Century",
    "href": "https://www.cold-takes.com/most-important-century/#Summary"
  },
  {
    "title": "The Rise and Fall of Agent Civilizations",
    "href": "https://www.dwarkesh.com/p/openai-huggingface"
  },
  {
    "title": "The Scramble: Getting in Position to Pace the Frontier",
    "href": "https://blog.peterwildeford.com/p/the-scramble-getting-in-position"
  },
  {
    "title": "Transformers, the Tech behind LLMs",
    "href": "https://www.youtube.com/watch?v=wjZofJX0v4M"
  },
  {
    "title": "Trends in AI",
    "href": "https://epoch.ai/trends"
  },
  {
    "title": "We’re Not Ready for SuperIntelligence (AI 2027)",
    "href": "https://youtu.be/5KVDDfAkRgc?is=S3RPYDpoKJhIeejA"
  },
  {
    "title": "What a 100 year-old horse teaches us about AI",
    "href": "https://youtu.be/eP1dSWFqKVs?is=gw_fzXd4owfiH7No"
  },
  {
    "title": "What Failure Looks Like",
    "href": "https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like"
  },
  {
    "title": "What will AI look like by 2030?",
    "href": "https://epoch.ai/publications/what-will-ai-look-like-in-2030"
  },
  {
    "title": "Why agent swarms could be the next “scaling law”",
    "href": "https://open.substack.com/pub/understandingai/p/why-agent-swarms-could-be-the-next?r=2xf1ok"
  },
  {
    "title": "Why AI alignment could be hard with deep learning",
    "href": "https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/"
  },
  {
    "title": "Why are we sprinting off the AI cliff?",
    "href": "https://youtu.be/fjZ90V_JREk?is=qXpRFOWQxM-YFY03"
  },
  {
    "title": "You Need a Theory of Victory",
    "href": "https://firstscattering.com/p/you-need-a-theory-of-victory"
  },
  {
    "title": "You should, unfortunately, really be worried about Sam Altman",
    "href": "https://youtu.be/_eYTkvZqbnQ?is=W514M_WrMSX0L1KG"
  },
  {
    "title": "Takeoff speeds rule everything around me",
    "href": "https://www.planned-obsolescence.org/p/takeoff-speeds-rule-everything-around"
  },
  {
    "title": "AI Governance: Overview and Theoretical Lenses",
    "href": "https://docs.google.com/document/d/18urWknXlA3EJ8NcJdxhU12crlVMQTty_DJ0XEC1Y3LM/edit?usp=sharing"
  },
  {
    "title": "AI Safety Evaluations: An Explainer",
    "href": "https://cset.georgetown.edu/article/ai-safety-evaluations-an-explainer/"
  },
  {
    "title": "When is a capability truly worrying?",
    "href": "https://www.aipolicyperspectives.com/p/when-is-a-capability-truly-worrying"
  },
  {
    "title": "Task-Completion Time Horizons of Frontier AI Models",
    "href": "https://metr.org/time-horizons/"
  },
  {
    "title": "Epoch Benchmarks",
    "href": "https://epoch.ai/benchmarks/search"
  },
  {
    "title": "Epoch Capabilities Index",
    "href": "https://epoch.ai/eci?view=graph&tab=release-date#overview"
  },
  {
    "title": "Taking Jaggedness Seriously",
    "href": "https://helentoner.substack.com/p/taking-jaggedness-seriously"
  },
  {
    "title": "Brief independent investigation of agents’ behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident",
    "href": "https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/"
  },
  {
    "title": "GPT-6 Astra System Card",
    "href": "https://deploymentsafety.openai.com/gpt-6-astra"
  },
  {
    "title": "AI 2040",
    "href": "https://ai-2040.com/?choices=plan-a-root"
  },
  {
    "title": "Pacing the Frontier",
    "href": "https://www.pacingthefrontier.com/"
  },
  {
    "title": "An Alien Mind",
    "href": "https://openai.com/index/an-alien-mind/"
  }
];

export default function Involvement() {
  return (
    <main>
      <SectionHeader slug="involvement" />
      <article className="entries">
        <details className="platform field-context">
          <summary className="group-label">
            <span>
              <span>Field Context</span>
              <span className="field-context-description">
                A collection of articles, research, and resources exploring AI safety.
              </span>
            </span>
            <span className="field-context-expand">Click to expand</span>
            <span className="field-context-collapse">Click to collapse</span>
          </summary>
          <FieldContextDeck items={FIELD_CONTEXT} />
        </details>

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

        <div className="entry platform" id="triathlon-club">
          <h2 className="who">
            Competitive Member <em>— Triathlon Club at UCI</em>
          </h2>
          <p className="when">September 2026 – Present</p>
          <div className="body">
            <ul>
              <li>
                Train weekly with the team across swim, bike, and run sessions
              </li>
              <li>
                Compete in collegiate and local triathlons throughout the
                quarter
              </li>
              <li>
                Build endurance, discipline, and consistency alongside a
                supportive team community
              </li>
            </ul>
          </div>
        </div>

        <div className="entry platform" id="sigma-pi">
          <h2 className="who">
            Alumni Network &amp; Scholarship Chairman{' '}
            <em>— Sigma Pi Fraternity</em>
          </h2>
          <p className="when">January 2025 – September 2026</p>
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
              <li>
                Launch mentorship and support initiatives that connect members
                with alumni for academic and professional guidance
              </li>
              <li>
                Lead professional development workshops on resumes,
                interviewing, and networking
              </li>
              <li>
                Manage scholarship programs and help members find and apply for
                academic funding opportunities
              </li>
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
