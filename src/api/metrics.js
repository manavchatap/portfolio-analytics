export const fetchMetrics = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/metrics');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    // Fallback to mock data if backend is down
    return {
      totalViews: 0,
      activeUsers: 0,
      topDevice: 'Unknown',
      topGeo: 'Unknown'
    };
  }
};

export const trackEvent = async (eventData) => {
  try {
    await fetch('http://localhost:8000/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};
