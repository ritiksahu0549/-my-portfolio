import React from 'react';

const groups = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Auth-ready UI'] },
  { title: 'MERN Flow', items: ['Mongoose', 'JWT UI', 'CRUD Patterns', 'Validation', 'Deployment-ready'] },
];

export default function SkillStack() {
  return (
    <div className="skillsGrid">
      {groups.map((g) => (
        <div key={g.title} className="skillCard" data-sr>
          <h3 className="skillTitle">{g.title}</h3>
          <div className="skills">
            {g.items.map((it) => (
              <span key={it} className="tag">
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

