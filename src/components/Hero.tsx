import { useEffect, useState } from 'react';
import resume from '../assets/leelamaya shatapathy_resume.pdf';
import Reveal from './Reveal';

const TITLES = ['Backend Developer', 'Python Engineer', 'API Systems Builder'];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const DELAY_AFTER_TYPING = 1400;
const DELAY_AFTER_DELETING = 300;

const stats = [
  { label: 'Years building software', value: '2+' },
  { label: 'Core stack', value: 'Python, Django, DRF' },
  { label: 'Focus', value: 'Reliable backend systems' },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = TITLES[index];

    if (!isDeleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length + 1)), TYPING_SPEED);
    } else if (!isDeleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPING);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length - 1)), DELETING_SPEED);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % TITLES.length);
      }, DELAY_AFTER_DELETING);
    }

    return () => clearTimeout(timeout);
  }, [displayed, index, isDeleting]);

  return (
    <section id="home" className="section-shell pt-14 md:pt-20">
      <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal variant="left" className="relative">
          <Reveal delay={80} className="section-kicker">
            Professional Portfolio
          </Reveal>
          <Reveal as="h1" delay={160} variant="blur" className="max-w-4xl font-heading text-5xl leading-[0.95] text-ink md:text-7xl">
            Backend Engineer focused on reliable, maintainable, and scalable software systems.
          </Reveal>
          <Reveal delay={240} className="mt-6 min-h-[2rem] text-lg font-medium uppercase tracking-[0.2em] text-accent md:text-xl">
            <>
              {displayed}
              <span className="ml-1 inline-block h-6 w-px animate-pulse bg-accent align-middle" />
            </>
          </Reveal>
          <Reveal delay={320} className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            I design APIs, background processing pipelines, and database-backed applications with a strong focus on
            maintainability. My work centers on Python, Django, DRF, FastAPI, and pragmatic engineering decisions.
          </Reveal>
          <Reveal delay={400} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-forest"
            >
              View Projects
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Open Resume
            </a>
          </Reveal>
        </Reveal>

        <Reveal variant="right" delay={180} className="surface-card soft-grid ambient-float relative overflow-hidden p-6 md:p-8">
          <div className="ambient-glow absolute right-0 top-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
          <div className="ambient-drift absolute bottom-0 left-0 h-28 w-28 rounded-full bg-forest/10 blur-2xl" />
          <div className="relative">
            <div className="text-sm uppercase tracking-[0.22em] text-muted">Based in India</div>
            <div className="mt-3 font-heading text-3xl text-ink">Leelamaya Shatapathy</div>
            <p className="mt-4 text-sm leading-7 text-muted">
              Backend-focused engineer with experience delivering SaaS features, optimizing APIs, and building systems
              that support real product workflows.
            </p>
            <div className="mt-8 space-y-4">
              {stats.map((item, index) => (
                <Reveal key={item.label} delay={260 + index * 110} className="rounded-2xl border border-ink/10 bg-white/70 p-4">
                  <div className="text-2xl font-bold text-ink">{item.value}</div>
                  <div className="mt-1 text-sm text-muted">{item.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
