import { motion } from 'framer-motion';
import { trackClick } from '../utils/analytics';

const ProjectCard = ({ title, description, tech, impact, image, screenshot, live, github }) => {
  const handleCardClick = () => {
    if (live) {
      trackClick('project_card', title);
      window.open(live, '_blank');
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation(); // Prevent card click when clicking GitHub button
    trackClick('github_link', title);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={handleCardClick}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all ${
        live ? 'cursor-pointer' : ''
      }`}
    >
      {/* Project Image/Screenshot */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-600 to-green-100">
        {screenshot ? (
          // Use actual screenshot if provided
          <img 
            src={screenshot} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        ) : (
          // Fallback to emoji if no screenshot
          <div className="w-full h-full flex items-center justify-center text-8xl">
            {image || '🚀'}
          </div>
        )}
        
        {/* Overlay on hover */}
        {live && (
          <div className="absolute inset-0 bg-⭐ bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity">
              View Project →
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech && tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        
        {/* Impact */}
        {impact && (
          <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
            <p className="text-sm text-green-700">
              <strong>Impact:</strong> {impact}
            </p>
          </div>
        )}
        
        {/* Links */}
        <div className="flex gap-3">
          {live && (
            <div className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm">
              Live Demo
            </div>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGithubClick}
              className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
