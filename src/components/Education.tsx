const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    university: 'Sambalpur University',
    duration: '2018 – 2021',
  },
  {
    degree: 'Bachelor of Science (Hons. Chemistry)',
    university: 'Fakir Mohan University',
    duration: '2015 – 2018',
  },
];

const Education = () => (
  <section id="education" className="py-16 bg-gray-50">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-dark mb-8 text-center drop-shadow">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree} className="bg-white rounded-xl shadow-lg p-5 flex flex-col md:flex-row md:justify-between md:items-center transition-transform hover:scale-[1.02] hover:shadow-xl">
            <div>
              <div className="font-semibold text-accent font-heading text-lg md:text-xl">{edu.degree}</div>
              <div className="text-gray-700">{edu.university}</div>
            </div>
            <div className="text-gray-500 text-sm mt-2 md:mt-0">{edu.duration}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 