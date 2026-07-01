import React from 'react';

const experienceData = [
  {
    date: 'Oct 2025 - Jan 2026',
    role: 'Backend Developer Intern',
    company: 'KenSoftware',
    location: 'Amman, Jordan',
    achievements: [
      'Built and maintained backend services for production web applications using ASP.NET Core MVC and WebAPI.',
      'Designed relational database schemas with SQL Server and Entity Framework Core, reducing query complexity by restructuring ORM models.',
      'Developed and tested RESTful APIs with authentication & authorization using ASP.NET Identity Library within a real-world project environment.',
    ],
  },
];

function Experience() {
  return (
    <section className="exp-section-v2">
      <h2 className="section-title">Experience</h2>

      <div className="exp-timeline-linear">
        {experienceData.map((exp, index) => (
          <div key={index} className="exp-item-linear">
            <div className="exp-line-node">
              <div className="exp-node-dot"></div>
            </div>

            <div className="exp-content-block">
              <div className="exp-meta-header">
                <div className="exp-title-group">
                  <h3 className="exp-role-title">{exp.role}</h3>
                  <h4 className="exp-company-name">
                    {exp.company}{' '}
                    <span className="exp-loc">({exp.location})</span>
                  </h4>
                </div>
                <span className="exp-duration-date">{exp.date}</span>
              </div>

              <ul className="exp-bullet-points">
                {exp.achievements.map((bullet, idx) => (
                  <li key={idx} className="exp-bullet-item">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
