import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Replace with your photo */}
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-2xl overflow-hidden">
              <img 
              src="/profile.jpg" 
              alt="Manav" 
              className="w-full h-full object-cover"
              />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {/* Hi, I'm <span className="text-blue-600">Manvay Chatap</span> */}
            </h3>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              A passionate <strong>Full-Stack Web Developer</strong> and <strong>Data Analytics Enthusiast </strong>
               currently persuing final year in Btech.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I specialize in building modern, data-driven web applications using MERN stack
              and Python. I love transforming complex problems into elegant, user-friendly solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">2+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">7+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
