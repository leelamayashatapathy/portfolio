import Reveal from './Reveal';

const links = [
  {
    label: 'Email',
    value: 'leelamayashatapathy@gmail.com',
    href: 'mailto:leelamayashatapathy@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/leelamayashatapathy',
    href: 'https://github.com/leelamayashatapathy',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/leelamaya-shatapathy-39b3aa213',
    href: 'https://www.linkedin.com/in/leelamaya-shatapathy-39b3aa213/',
  },
];

const Contact = () => (
  <section id="contact" className="section-shell pt-8">
    <Reveal variant="blur" className="surface-card section-spotlight relative overflow-hidden p-8 md:p-12">
      <div className="ambient-drift absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-accent/10 to-transparent lg:block" />
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal variant="left">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Contact Information</h2>
          <p className="section-copy max-w-xl">
            Available for backend engineering opportunities, project-based work, and professional collaboration.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {links.map((item, index) => (
            <Reveal
              key={item.label}
              as="a"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              delay={120 + index * 110}
              variant="right"
              className="rounded-[24px] border border-ink/10 bg-white/75 px-5 py-5 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-white"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-muted">{item.label}</div>
              <div className="mt-2 text-base font-medium text-ink md:text-lg">{item.value}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default Contact;
