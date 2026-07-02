import React from 'react';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/Card';
import TechStack from './components/TechStack';
import CompetitiveProgrammingTimeline from './components/CompetitiveProgrammingTimeline';
import Experience from './components/Experience';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <HeroSection />
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            date={project.date}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            DemoLink={project.DemoLink}
          />
        ))}
      </div>
      <TechStack />
      <Experience />
      <CompetitiveProgrammingTimeline />
      <Footer />
    </div>
  );
}

export default App;
