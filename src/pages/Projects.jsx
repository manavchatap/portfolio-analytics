import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import CustomCursor from '../components/CustomCursor';
import { useScrollTracking } from '../hooks/useAnalytics';
import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

const Projects = () => {
  useScrollTracking('projects-page');
  
  useEffect(() => {
    trackPageView();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'SafeRoute Nagpur',
      description: 'AI-Powered Traffic Safety Platform for Smarter, Safer Roads',
      tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'Leaflet Maps', 'Chart.js', 'React Router'],
      impact: '328 accidents analyzed across 23 identified black spots with 72% safety score improvement through data-driven insights and community reporting',
      image: '🚦',
      screenshot: '/projects/project1.png', // Add your screenshot path
      live: 'https://saferoute-nagpur.vercel.app/',
      github: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'AstroNumero',
      description:'Full-stack web application combining ancient Vedic sciences with modern technology to provide accurate numerological and astrological insights',
      tech: ['React.js', 'Vite', 'React Router', 'SunCalc', 'CSS3 Animations', 'Jean Meeus Algorithms', 'Vercel'],
      impact: 'Successfully deployed comprehensive platform with 4 core calculators (Mulank/Bhagyank, Rashi, Compatibility, Name Numerology), serving detailed personality insights for 9 numerology numbers and 12 zodiac signs with 100% client-side privacy',
      image: '💼',
      screenshot: '/projects/project2.png', // Add your screenshot path
      live: 'https://astro-numerology.vercel.app/',
      github: 'https://github.com/yourusername/portfolio'
    },
    {
      id: 3,
      title: 'ThriftHub',
      description:'A full-stack e-commerce platform enabling users to buy and sell second-hand goods through a multi-vendor marketplace.',
      tech: ['React, TypeScript, Django REST Framework, PostgreSQL'],
      impact: 'ThriftHub addresses critical sustainability challenges by promoting a circular economy where products are reused instead of discarded.',
      image: '💼',
      screenshot: '/public/projects/project1.png', // Add your screenshot path
      live: 'https://thrifthub-frontend.vercel.app/',
      github: 'https://github.com/yourusername/portfolio'
    },
    {
      id: 4,
      title: 'LifeLedger',
      description:'LifeLedger is a blockchain-based healthcare platform designed to maintain transparent and tamper-proof organ donation and transplant records.',
      tech: ['React.js','Blockchain','Vercel'],
      impact: 'LifeLedger improves trust and transparency in the organ donation process by eliminating data manipulation and delays. It minimizes fraudulent activities, ensures equitable distribution of organs, and saves lives by speeding up medical decisions through automated and verified record management.',
      image: '💼',
      screenshot: '/projects/project2.png', // Add your screenshot path
      live: 'https://astro-numerology.vercel.app/',
      github: 'https://github.com/yourusername/portfolio'
    }
  ];

  return (
    <div id="projects-page" className="cursor-none">
      <CustomCursor />
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My Projects
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Click on any project to view it live
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
