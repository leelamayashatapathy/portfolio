const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', org: 'Amazon Web Services' },
  { name: 'Python for Everybody', org: 'Coursera' },
  { name: 'Django for APIs', org: 'Udemy' },
];

const Certifications = () => (
  <section id="certifications" className="py-16 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-dark mb-8 text-center drop-shadow">Certifications</h2>
      <ul className="space-y-4">
        {certifications.map((cert) => (
          <li key={cert.name} className="bg-gray-50 rounded-xl shadow-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center transition-transform hover:scale-[1.02] hover:shadow-xl">
            <span className="font-medium text-gray-800 text-base md:text-lg">{cert.name}</span>
            <span className="text-accent font-heading text-sm mt-1 md:mt-0">{cert.org}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certifications; 