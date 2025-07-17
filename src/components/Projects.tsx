const projects = [
  {
    title: 'ChatBot Backend',
    description: "A sophisticated Django REST Framework backend that creates an AI-powered chat experience using Google's Gemini API. This project demonstrates real-time messaging, OTP authentication, subscription management, and intelligent AI responses.",
    tech: ['Python', 'Django', 'Django-rest-framework', 'PostgreSQL', 'Redis', 'Celery'],
    github: 'https://github.com/leelamayashatapathy/gemini_back_clone',
  },
  {
    title: 'FitStudio Backend',
    description: "This is a Django REST API backend for managing sessions, time slots, and bookings for a fitness studio. Instructors can create sessions with time slots, and clients can book them. The system supports user role-based permissions, timezone-aware scheduling, and dynamic seat availability.",
    tech: ['Python', 'Django', 'DRF', 'MySQL', 'JWT', 'Celery'],
    github: 'https://github.com/leelamayashatapathy/FitStudio',
  },
  {
    title: 'Student Portal',
    description: "A simple and responsive teacher-student management portal built using Django and Django REST Framework (DRF) for the backend and HTML with Bootstrap for the frontend. The application supports JWT-based authentication and allows teachers to manage student records securely and efficiently.",
    tech: ['Python', 'Django', 'DRF', 'HTML', 'Bootstrap', 'JWT'],
    github: 'https://github.com/leelamayashatapathy/Teacherportal',
  },
];

const tagColors: Record<string, string> = {
  Python: 'bg-yellow-100 text-yellow-800',
  Django: 'bg-green-100 text-green-800',
  'Django-rest-framework': 'bg-red-100 text-red-800',
  DRF: 'bg-red-100 text-red-800',
  PostgreSQL: 'bg-blue-100 text-blue-800',
  MySQL: 'bg-teal-100 text-teal-800',
  Redis: 'bg-pink-100 text-pink-800',
  Celery: 'bg-green-50 text-green-700',
  JWT: 'bg-purple-100 text-purple-800',
  HTML: 'bg-orange-100 text-orange-800',
  Bootstrap: 'bg-indigo-100 text-indigo-800',
};

const Projects = () => (
  <section id="projects" className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-dark mb-8 text-center drop-shadow">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-xl shadow-lg p-6 flex flex-col transition-transform hover:scale-[1.02] hover:shadow-xl">
            <h3 className="text-xl font-heading font-semibold text-accent mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3 flex-1">{project.description}</p>
            <div className="mb-4">
              <span className="text-sm text-gray-500">Tech:</span>
              <ul className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((t) => (
                  <li key={t} className={`px-2 py-1 rounded text-xs font-medium ${tagColors[t] || 'bg-accent/10 text-accent-dark'}`}>{t}</li>
                ))}
              </ul>
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-auto text-accent hover:underline font-medium">GitHub &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 