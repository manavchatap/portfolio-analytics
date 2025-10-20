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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Live Analytics</h2>
        <MetricsWidget />
      </div>
    </div>
  );
};

export default Home;
