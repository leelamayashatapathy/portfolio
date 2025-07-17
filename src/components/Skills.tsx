import React from 'react';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', img: '/src/assets/skills/python.svg' },
      { name: 'SQL', img: '/src/assets/skills/sql.svg' },
      { name: 'JavaScript', img: '/src/assets/skills/javascript.svg' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Django', img: '/src/assets/skills/django.svg' },
      { name: 'DRF', img: '/src/assets/skills/drf.svg' },
      { name: 'FastAPI', img: '/src/assets/skills/fastapi.svg' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', img: '/src/assets/skills/mysql.svg' },
      { name: 'PostgreSQL', img: '/src/assets/skills/postgresql.svg' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Celery', img: '/src/assets/skills/celery.svg' },
      { name: 'Git', img: '/src/assets/skills/git.svg' },
      { name: 'Bitbucket', img: '/src/assets/skills/bitbucket.svg' },
      { name: 'Jira', img: '/src/assets/skills/jira.svg' },
      { name: 'React', img: '/src/assets/skills/react.svg' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-dark mb-8 text-center drop-shadow">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="bg-white rounded-xl shadow-lg p-6 mb-2">
            <h3 className="text-lg font-semibold text-accent mb-3 font-heading">{group.category}</h3>
            <ul className="flex flex-wrap gap-4">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center space-x-3 bg-accent/10 px-4 py-3 rounded-lg shadow-sm text-gray-800 hover:bg-accent/20 transition-all">
                  <img src={item.img} alt={item.name} className="w-10 h-10 object-contain" />
                  <span className="font-medium text-base">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 