import Reveal from './Reveal';

const education = [
  {
    degree: 'Master of Computer Applications',
    university: 'Sambalpur University',
    duration: '2018 to 2021',
  },
  {
    degree: 'Bachelor of Science, Chemistry Honors',
    university: 'Fakir Mohan University',
    duration: '2015 to 2018',
  },
];

const Education = () => (
  <section id="education" className="section-shell">
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <Reveal variant="left" className="section-heading">
        <div className="section-kicker">Education</div>
        <h2 className="section-title">Educational Background</h2>
        <p className="section-copy">
          Academic qualifications that support a structured and disciplined approach to software development.
        </p>
      </Reveal>

      <div className="space-y-5">
        {education.map((edu, index) => (
          <Reveal key={edu.degree} delay={index * 140} variant="right" className="surface-card p-6 md:p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-heading text-3xl text-ink">{edu.degree}</h3>
                <p className="mt-2 text-base text-muted">{edu.university}</p>
              </div>
              <div className="rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm text-muted">{edu.duration}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
