import { useEffect } from 'react';
import { trackScroll, trackClick } from '../utils/analytics';

export const useScrollTracking = (sectionId) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const depth = Math.round(entry.intersectionRatio * 100);
            trackScroll(sectionId, depth);
          }
        });
      },
      { threshold: [0.25, 0.5, 0.75, 1.0] }
    );
    
    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.disconnect();
      }
    };
  }, [sectionId]);
};

export const useClickTracking = (elementId) => {
  useEffect(() => {
    const element = document.getElementById(elementId);
    
    const handleClick = (e) => {
      trackClick(elementId, e.target.textContent);
    };
    
    if (element) {
      element.addEventListener('click', handleClick);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('click', handleClick);
      }
    };
  }, [elementId]);
};
