import { trackEvent as sendTrackEvent } from '../api/metrics';

// Get or create session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

// Detect device type
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
};

// Get approximate location (you can enhance this with IP geolocation API)
const getLocation = () => {
  // For now, return timezone-based guess
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone.includes('Kolkata') || timezone.includes('Calcutta')) return 'India';
  if (timezone.includes('New_York')) return 'USA';
  if (timezone.includes('London')) return 'UK';
  return timezone.split('/')[0] || 'Unknown';
};

export const trackEvent = (eventType, data) => {
  const event = {
    session_id: getSessionId(),
    event_type: eventType,
    route: window.location.pathname,
    section: data?.section || null,
    value: data?.value || null,
    device: getDeviceType(),
    geo: getLocation(),
    timestamp: new Date().toISOString()
  };
  
  console.log('í³Š Tracking event:', event);
  sendTrackEvent(event);
};

export const trackScroll = (section, depth) => {
  trackEvent('scroll', { section, depth });
};

export const trackClick = (element, value) => {
  trackEvent('click', { element, value });
};

// Track page view on load
export const trackPageView = () => {
  trackEvent('page_view', {});
};
