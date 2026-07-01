function TechStack() {
  const stack = {
    'Backend & DB': [
      '.NET 10',
      'ASP.NET Core',
      'PostgreSQL',
      'Entity Framework',
      'CQRS / MediatR',
    ],
    Frontend: ['React', 'Angular', 'JavaScript', 'HTML / CSS'],
    'DevOps & Tools': ['Git / GitHub'],
  };

  return (
    <section className="stack-section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="stack-grid">
        {Object.entries(stack).map(([category, skills]) => (
          <div key={category} className="stack-card">
            <h4 className="stack-category-title">{category}</h4>
            <div className="stack-tags">
              {skills.map((skill) => (
                <span key={skill} className="stack-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
