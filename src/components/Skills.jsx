import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'blue',
      skills: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript']
    },
    {
      title: 'Backend',
      color: 'purple',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'MongoDB', 'MySQL']
    },
    {
      title: 'Data & Analytics',
      color: 'green',
      skills: ['Pandas', 'NumPy', 'Data Visualization', 'SQL', 'Excel', 'Power BI']
    },
    {
      title: 'Tools & Others',
      color: 'orange',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render', 'AWS']
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:bg-blue-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:bg-purple-100' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', hover: 'hover:bg-green-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:bg-orange-100' }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${colorClasses[category.color].bg} rounded-lg flex items-center justify-center mr-4`}>
                  <span className={`text-2xl ${colorClasses[category.color].text}`}>
                    {idx === 0 ? '���' : idx === 1 ? '⚙️' : idx === 2 ? '���' : '���️'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`px-4 py-2 ${colorClasses[category.color].bg} ${colorClasses[category.color].text} ${colorClasses[category.color].border} ${colorClasses[category.color].hover} border-2 rounded-full font-medium text-sm transition-all cursor-pointer`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
