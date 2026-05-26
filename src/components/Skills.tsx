import python from '../assets/skills/python.svg';
import javascript from '../assets/skills/javascript.svg';
import sql from '../assets/skills/sql.svg';
import django from '../assets/skills/django.svg';
import drf from '../assets/skills/drf.svg';
import fastapi from '../assets/skills/fastapi.svg';
import react from '../assets/skills/react.svg';
import numpy from '../assets/skills/numpy-svgrepo-com.svg';
import pandas from '../assets/skills/Pandas.svg';
import mysql from '../assets/skills/mysql.svg';
import postgresql from '../assets/skills/postgresql.svg';
import sqlite from '../assets/skills/SQLite.svg';
import mongodb from '../assets/skills/MongoDB.svg';
import redis from '../assets/skills/Redis.svg';
import rabbitmq from '../assets/skills/RabbitMQ.svg';
import celery from '../assets/skills/celery.svg';
import git from '../assets/skills/git.svg';
import github from '../assets/skills/GitHub.svg';
import bitbucket from '../assets/skills/bitbucket.svg';
import jira from '../assets/skills/jira.svg';
import postman from '../assets/skills/Postman.svg';
import docker from '../assets/skills/Docker.svg';
import linux from '../assets/skills/Linux.svg';
import Reveal from './Reveal';

const skillGroups = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', img: python },
      { name: 'JavaScript', img: javascript },
      { name: 'SQL', img: sql },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Django', img: django },
      { name: 'DRF', img: drf },
      { name: 'FastAPI', img: fastapi },
      { name: 'React', img: react },
    ],
  },
  {
    category: 'Data Layer',
    items: [
      { name: 'MySQL', img: mysql },
      { name: 'PostgreSQL', img: postgresql },
      { name: 'SQLite', img: sqlite },
      { name: 'MongoDB', img: mongodb },
      { name: 'NumPy', img: numpy },
      { name: 'Pandas', img: pandas },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'Redis', img: redis },
      { name: 'RabbitMQ', img: rabbitmq },
      { name: 'Celery', img: celery },
      { name: 'Docker', img: docker },
      { name: 'Git', img: git },
      { name: 'GitHub', img: github },
      { name: 'Bitbucket', img: bitbucket },
      { name: 'Jira', img: jira },
      { name: 'Postman', img: postman },
      { name: 'Linux', img: linux },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-shell">
    <Reveal variant="up" className="section-heading">
      <div className="section-kicker">Capabilities</div>
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-copy">Core technologies and tools used in backend application development.</p>
    </Reveal>

    <div className="mt-10 grid gap-5 lg:grid-cols-2">
      {skillGroups.map((group, groupIndex) => (
        <Reveal
          key={group.category}
          delay={groupIndex * 120}
          variant={groupIndex % 2 === 0 ? 'left' : 'right'}
          className="rounded-[28px] border border-ink/10 bg-panel/90 p-6 shadow-[0_14px_40px_rgba(31,41,51,0.06)]"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-heading text-2xl text-ink">{group.category}</h3>
            <span className="rounded-full bg-ink/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted">
              {group.items.length}
            </span>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item, itemIndex) => (
              <Reveal
                key={item.name}
                as="li"
                delay={80 + itemIndex * 45}
                variant="scale"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-2"
              >
                <img src={item.img} alt={item.name} className="h-4 w-4 shrink-0 object-contain" />
                <span className="whitespace-nowrap text-sm font-medium text-ink">{item.name}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
