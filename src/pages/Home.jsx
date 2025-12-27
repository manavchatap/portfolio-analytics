import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import MetricsWidget from '../components/MetricsWidget';
import CustomCursor from '../components/CustomCursor';
import { useScrollTracking } from '../hooks/useAnalytics';
import { trackPageView } from '../utils/analytics';

const Home = () => {
  useScrollTracking('home-page');
  
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div id="home-page" className="cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-gray-100 ">
        <h2 className="text-3xl font-bold text-center mb-8">Social Links</h2>

        <div className='text-5xl text-black flex gap-8 hover:text-blue-600 justify-center'>

        <a href="https://www.linkedin.com/in/" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/manavchatap" target="_blank">
        <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://wa.me/91569519813" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
        </a>
        </div>

        <MetricsWidget />
      </div>
    </div>
  );
};

export default Home;
