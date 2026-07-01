import React from 'react';

const cpData = [
  {
    date: '2025',
    title: 'AIO 2025',
    subtitle: '3rd Place – Problem-Solving Track',
    description:
      'Achieved podium finish (3rd Place) in the Advanced Informatics Olympiad track, demonstrating advanced algorithmic execution and data structure mastery.',
  },
  {
    date: '2025',
    title: 'Amman CPC 2025',
    subtitle: '11th Place (out of 70 teams)',
    description:
      'Secured a top-tier rank (11th out of 70 elite teams) in the Amman Competitive Programming Contest, solving complex mathematical and dynamic programming puzzles under high pressure.',
  },
  {
    date: '2024',
    title: 'Orange Problem-Solving Hackathon',
    subtitle: '1st Place',
    description:
      'Won 1st place in the prestigious Orange Hackathon, leading solution design and rapid prototyping for optimization challenges within a strict time limit.',
  },
  {
    date: '2024',
    title: 'AIO 2024',
    subtitle: '2nd Place – Problem-Solving Track',
    description:
      'Earned 2nd place in the Olympiad, reinforcing strong foundational skills in time-complexity optimization and core computer science fundamentals.',
  },
  {
    date: '2024',
    title: 'Project to Market Competition',
    subtitle: '2nd Place',
    description:
      'Ranked 2nd, bridging the gap between highly optimized software engineering architecture and real-world market readiness.',
  },
  {
    date: '2024',
    title: 'JCPC 2024',
    subtitle: '23rd Place (out of 120 teams)',
    description:
      'Competed at the national level in the Jordanian Competitive Programming Contest, ranking 23rd out of 120 of the best teams in the country.',
  },
  {
    date: '2023',
    title: 'JCPC 2023',
    subtitle: '35th Place (out of 90 teams)',
    description:
      'Initial debut at the Jordan National Championship, establishing a strong foundation in official ICPC-style team contests and problem solving.',
  },
];

function CompetitiveProgrammingTimeline() {
  return (
    <section className="cp-timeline-section">
      <h2 className="section-title">Competitive Programming</h2>

      <div className="cp-timeline-container">
        {cpData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`cp-timeline-item ${isLeft ? 'left-side' : 'right-side'}`}
            >
              <div className="cp-timeline-point-wrapper">
                <div className="cp-timeline-point"></div>
              </div>

              <div className="cp-timeline-card">
                <div className="cp-card-header">
                  <h3 className="cp-card-title">{item.title}</h3>
                  <span className="cp-card-date">{item.date}</span>
                </div>
                <h5 className="cp-card-subtitle">{item.subtitle}</h5>
                <p className="cp-card-desc">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CompetitiveProgrammingTimeline;
