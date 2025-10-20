import { motion } from 'framer-motion';
import { useScrollTracking } from '../hooks/useAnalytics';

const ProjectCard = ({ id, title, description, tech, impact, image }) => {
  useScrollTracking(`project-${id}`);

  return (
    <motion.div
      id={`project-${id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <p className="text-white text-6xl">{image}</p>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm font-semibold text-green-600">{impact}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
