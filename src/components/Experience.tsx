const experiences = [
  {
    company: 'Zentratech',
    role: 'Junior Software Developer (Remote)',
    duration: 'Feb 2023 – Sept 2024',
    points: [
        "Designed and developed scalable backend modules using Python, Django, and Django REST Framework for SaaS products serving 500+ active users.",
        "Implemented RESTful APIs and optimized database queries (MySQL), improving response times by 30%.",
        "Integrated Celery for background task processing, reducing main thread load and improving performance.",
        "Collaborated cross-functionally with frontend teams using React, delivering end-to-end features under tight deadlines.",
    ],
  },
  {
    company: 'ZestIoT',
    role: 'Python Developer',
    duration: 'May 2022 – Nov 2022',
    points: [
        "Contributed to the core backend team to develop and maintain Python/Django modules for aviation industry solutions.",
        "Wrote unit tests and debugged production bugs, improving system stability.",
        "Enhanced API endpoints for better performance and scalability.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-dark mb-8 text-center drop-shadow">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="bg-gray-50 rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02] hover:shadow-xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <span className="text-lg font-semibold text-accent font-heading">{exp.company}</span>
              <span className="text-gray-500 text-sm">{exp.duration}</span>
            </div>
            <div className="text-gray-900 font-medium mb-2">{exp.role}</div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 