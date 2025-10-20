import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import CustomCursor from '../components/CustomCursor';
import { useScrollTracking } from '../hooks/useAnalytics';

const Contact = () => {
  useScrollTracking('contact-page');

  return (
    <div id="contact-page" className="cursor-none">
      <CustomCursor />
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
