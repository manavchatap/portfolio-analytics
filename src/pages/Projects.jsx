import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import CustomCursor from '../components/CustomCursor';
import { useScrollTracking } from '../hooks/useAnalytics';

const Projects = () => {
  useScrollTracking('projects-page');

  const projects = [
    {
      id: 1,
      title: 'Smart Retail Analytics',
      description: 'Real-time retail analytics dashboard with predictive insights',
      tech: ['React', 'FastAPI', 'MongoDB'],
      impact: '+35% user engagement after redesign',
      image: '���'
    },
    {
      id: 2,
      title: 'LifeLedger',
      description: 'Secure organ transplant management system increasing transparency',
      tech: ['React', 'IPFS', 'Blockchain'],
      impact: 'Featured in college tech showcase',
      image: '��'
    },
    {
      id: 3,
      title: 'Local Price Tracker',
      description: 'Crowdsourced price comparison for local stores',
      tech: ['React', 'Node.js', 'Redis'],
      impact: 'Helps users save 15% on groceries',
      image: '���'
    }
  ];

  return (
    <div id="projects-page" className="cursor-none">
      <CustomCursor />
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My Projects
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
