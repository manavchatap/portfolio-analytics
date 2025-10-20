import { motion } from 'framer-motion';
import { useState } from 'react';
import { trackEvent } from '../utils/analytics';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    trackEvent('form_submit', formData);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2daafccc-1ed6-4ed3-94e9-161c61a8c3f0', // Get from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message. Please try again.');
      }
      
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Failed to send message. Please try again.');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
          placeholder="Your Name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          required
          rows="5"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
          placeholder="Your message here..."
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
        className={`w-full py-3 rounded-lg font-medium transition ${
          isLoading 
            ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </motion.button>

      {status && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 text-center font-medium p-3 rounded-lg ${
            status.includes('✅') 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {status}
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;
