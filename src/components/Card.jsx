import React from 'react';

const techColors = [
  { bg: '#e7dbdf8e' },
  { bg: '#e2e6d791' },
  { bg: '#ebdcb978' },
  { bg: '#e1d5c57a' },
  { bg: '#b7c2bc60' },
];

function Card({
  title,
  date,
  description,
  technologies = [],
  githubLink,
  DemoLink,
}) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <h5 className="card-date">{date}</h5>
      <p className="card-description">{description}</p>

      {(technologies.length > 0 || githubLink || DemoLink) && (
        <div className="card-footer">
          <div className="card-technologies">
            {technologies.map((tech, index) => {
              const colors = techColors[index % techColors.length];
              return (
                <span
                  className="card-technology"
                  key={index}
                  style={{ backgroundColor: colors.bg }}
                >
                  {tech}
                </span>
              );
            })}
          </div>

          <div className="project-links">
            {' '}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                github
              </a>
            )}
            {DemoLink && (
              <a href={DemoLink} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
