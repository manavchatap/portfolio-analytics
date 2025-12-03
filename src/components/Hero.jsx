import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Manvay Chatap</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Web Developer & Data Analytics Enthusiast
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition"
              >
                View Projects
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-lg hover:bg-gray-50 transition"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Live Stats - Mock Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-blue-600">17</p>
              <p className="text-gray-600">Total Views</p>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-green-600">1</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-purple-600">Mobile</p>
              <p className="text-gray-600">Top Device</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
