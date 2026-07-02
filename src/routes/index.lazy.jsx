import { createLazyFileRoute } from '@tanstack/react-router';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/Card';
import TechStack from '../components/TechStack';
import CompetitiveProgrammingTimeline from '../components/CompetitiveProgrammingTimeline';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

const projectsData = [
  {
    id: 1,
    title: 'ORYX',
    date: '15-apr-2026',
    description: `Developed core modules for cohort-based onboarding and automated skill assessment systems for a platform
        bridging IT talent, mentors, and tech companies.
        Implemented a peer-review system and XP-based progression tracking to monitor trainee development across
        structured learning paths.`,
    technologies: ['ASP.NET', 'PostgreSQL', 'Clean Architecture', 'CQRS'],
    githubLink: 'https://github.com/osamasaleh3',
    DemoLink: 'https://www.oryx-jo.com',
  },
  {
    id: 2,
    title: 'Methaq',
    date: '31-mar-2026',
    description: `Specialized management platform for Quranic centers that unifies administrators, supervisors, and students. The system features automated modules designed to streamline center operations, including real-time attendance tracking, online enrollment processing, and digital student task evaluations.`,
    technologies: ['ASP.NET', 'PostgreSQL', 'Clean Architecture', 'CQRS'],
    githubLink: 'https://github.com/osamasaleh3',
  },
  {
    id: 3,
    title: 'Gradify',
    date: '28-dec-2025',
    description: `A comprehensive graduation project platform that streamlines proposal submissions and final grading workflows for students, supervisors, deans, and administrators. By architecting and enforcing secure, role-based access control, the system successfully safeguards sensitive institutional data and ensures authorized stakeholder collaboration across the entire academic project lifecycle.`,
    technologies: ['ASP.NET', 'SQL Server', '3 tier Architecture'],
  },
  {
    id: 4,
    title: 'Edari',
    date: 'In progress',
    description: `A comprehensive HR management platform covering employee lifecycle, attendance, payroll, leave
management, and performance reviews across multiple roles (SuperAdmin, HR Manager, Employee).`,
    technologies: ['ASP.NET', 'PostgreSQL', 'Clean Architecture', 'CQRS'],
  },
];

function Index() {
  return (
    <>
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
      <Contact />
    </>
  );
}
