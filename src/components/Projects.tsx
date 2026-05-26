import Reveal from './Reveal';

const projects = [
  {
    title: 'ChatBot Backend',
    description:
      'A Django REST backend for an AI chat product using Gemini APIs, OTP authentication, subscription flows, and message handling designed for real application behavior.',
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery'],
    github: 'https://github.com/leelamayashatapathy/gemini_back_clone',
  },
  {
    title: 'FitStudio Backend',
    description:
      'A scheduling and booking backend for fitness sessions with role-based permissions, timezone-aware slots, and booking state that stays consistent under concurrent use.',
    tech: ['Python', 'Django', 'DRF', 'MySQL', 'JWT', 'Celery'],
    github: 'https://github.com/leelamayashatapathy/FitStudio',
  },
  {
    title: 'Student Portal',
    description:
      'A teacher-student management portal with JWT authentication, clean CRUD workflows, and a straightforward architecture for secure academic record handling.',
    tech: ['Python', 'Django', 'DRF', 'HTML', 'Bootstrap', 'JWT'],
    github: 'https://github.com/leelamayashatapathy/Teacherportal',
  },
];

const Projects = () => (
  <section id="projects" className="section-shell">
    <Reveal variant="up" className="section-heading">
      <div className="section-kicker">Selected Work</div>
      <h2 className="section-title">Selected Projects</h2>
      <p className="section-copy">
        Representative backend projects demonstrating application design, data handling, and system reliability.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-6 xl:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal
          key={project.title}
          delay={index * 130}
          variant="scale"
          className="surface-card flex h-full flex-col p-7 md:p-8"
        >
          <div className="text-sm uppercase tracking-[0.22em] text-muted">Project {String(index + 1).padStart(2, '0')}</div>
          <h3 className="mt-4 font-heading text-3xl text-ink">{project.title}</h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-muted">{project.description}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li key={item} className="rounded-full border border-ink/10 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {item}
              </li>
            ))}
          </ul>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-accent transition hover:text-accent-deep"
          >
            View Repository
            <span className="ml-2">&rarr;</span>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Projects;
