import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'Internpe',
      period: 'July 2024 - Aug 2024',
      description: 'Built and deployed scalable web applications using React and Node.js',
      achievements: [
        'Developed and designed multiple web projects as part of assigned tasks.',
        'Worked on improving UI/UX, ensuring that websites were visually appealing and functional',
        'Strengthened your understanding of frontend frameworks and integration practices.'
      ],
      icon: ''
    },
    {
      role: 'Web Developer Intern',
      company: 'Bartr',
      period: 'Jun 2025 - July 2025',
      description: 'Worked on UI/UX optimization',
      achievements: [
        'Refactored legacy styles into modular, reusable CSS and utility classes, reducing duplication and cutting stylesheet size while maintaining pixel-accurate layouts.',
        'Built and shipped responsive UI components in React.js improving page load performance and visual consistency across breakpoints and devices.',
        
      ],
      icon: ''
    },
    // {
    //   role: 'Web Development Lead',
    //   company: 'College Tech Club',
    //   period: '2023 - Present',
    //   description: 'Led a team of developers in building websites for college events and hackathons.',
    //   achievements: [
    //     'Managed 8+ successful project launches',
    //     'Mentored 20+ junior developers',
    //     'Organized technical workshops'
    //   ],
    //   icon: '���'
    // }
  ];

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative mb-12 md:flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 md:px-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <motion.li
                        key={achIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.2 + achIdx * 0.1 }}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
