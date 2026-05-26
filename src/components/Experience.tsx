import Reveal from './Reveal';

const experiences = [
  {
    company: 'Zentratech',
    role: 'Junior Software Developer',
    mode: 'Remote',
    duration: 'February 2023 to September 2024',
    points: [
      'Designed scalable backend modules using Python, Django, and DRF for SaaS products serving 500+ active users.',
      'Implemented REST APIs and improved MySQL query performance, reducing response times by roughly 30%.',
      'Integrated Celery-based background processing to shift heavy tasks off the request cycle.',
      'Worked closely with frontend teams to deliver end-to-end features on tight product timelines.',
    ],
  },
  {
    company: 'ZestIoT',
    role: 'Python Developer',
    mode: 'On-site',
    duration: 'May 2022 to November 2022',
    points: [
      'Contributed to backend modules for aviation-focused software built on Python and Django.',
      'Wrote tests, debugged production issues, and strengthened overall system stability.',
      'Improved API behavior and maintainability with focused endpoint and performance refinements.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-shell">
    <Reveal variant="up" className="section-heading">
      <div className="section-kicker">Experience</div>
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-copy">
        Experience in backend development, API design, and performance-focused application delivery.
      </p>
    </Reveal>

    <div className="mt-12 space-y-6">
      {experiences.map((exp, index) => (
        <Reveal
          key={exp.company}
          delay={index * 150}
          variant={index % 2 === 0 ? 'left' : 'right'}
          className="surface-card relative overflow-hidden p-7 md:p-8"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-forest" />
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.2em] text-muted">Role {String(index + 1).padStart(2, '0')}</div>
              <h3 className="mt-2 font-heading text-3xl text-ink">{exp.company}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
                <span>{exp.role}</span>
                <span className="h-1 w-1 rounded-full bg-muted/60" />
                <span>{exp.mode}</span>
              </div>
            </div>
            <div className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-muted">{exp.duration}</div>
          </div>

          <ul className="mt-8 grid gap-3 text-sm leading-7 text-muted md:grid-cols-2">
            {exp.points.map((point, pointIndex) => (
              <Reveal
                key={point}
                as="li"
                delay={120 + pointIndex * 60}
                variant="blur"
                className="rounded-2xl border border-ink/10 bg-white/65 px-4 py-4"
              >
                {point}
              </Reveal>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Experience;
