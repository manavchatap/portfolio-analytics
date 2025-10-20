const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Data storage files
const EVENTS_FILE = path.join(__dirname, 'events.json');
const METRICS_FILE = path.join(__dirname, 'metrics.json');

// Initialize data files if they don't exist
if (!fs.existsSync(EVENTS_FILE)) {
  fs.writeFileSync(EVENTS_FILE, JSON.stringify([]));
}

if (!fs.existsSync(METRICS_FILE)) {
  fs.writeFileSync(METRICS_FILE, JSON.stringify({
    totalViews: 0,
    sessions: {},
    devices: {},
    locations: {}
  }));
}

// Helper: Read metrics
function readMetrics() {
  return JSON.parse(fs.readFileSync(METRICS_FILE, 'utf8'));
}

// Helper: Write metrics
function writeMetrics(data) {
  fs.writeFileSync(METRICS_FILE, JSON.stringify(data, null, 2));
}

// Helper: Clean old sessions (older than 5 minutes)
function cleanOldSessions(metrics) {
  const now = Date.now();
  const FIVE_MINUTES = 5 * 60 * 1000;
  
  Object.keys(metrics.sessions).forEach(sessionId => {
    if (now - metrics.sessions[sessionId] > FIVE_MINUTES) {
      delete metrics.sessions[sessionId];
    }
  });
  
  return metrics;
}

// Root route - shows API info
app.get('/', (req, res) => {
  res.json({ 
    message: 'âœ… Portfolio Analytics API',
    status: 'running',
    version: '1.0.0',
    endpoints: {
      metrics: 'GET /api/metrics',
      track: 'POST /api/track',
      health: 'GET /health'
    }
  });
});

// API: Track event
app.post('/api/track', (req, res) => {
  const { session_id, event_type, route, section, device, geo } = req.body;
  
  // Read current metrics
  let metrics = readMetrics();
  
  // Update views
  if (event_type === 'page_view') {
    metrics.totalViews++;
  }
  
  // Update active sessions
  metrics.sessions[session_id] = Date.now();
  
  // Track device
  if (device) {
    metrics.devices[device] = (metrics.devices[device] || 0) + 1;
  }
  
  // Track location
  if (geo) {
    metrics.locations[geo] = (metrics.locations[geo] || 0) + 1;
  }
  
  // Clean old sessions
  metrics = cleanOldSessions(metrics);
  
  // Save metrics
  writeMetrics(metrics);
  
  // Save event
  const events = JSON.parse(fs.readFileSync(EVENTS_FILE, 'utf8'));
  events.push({
    session_id,
    event_type,
    route,
    section,
    device,
    geo,
    timestamp: new Date().toISOString()
  });
  
  // Keep only last 1000 events
  if (events.length > 1000) {
    events.splice(0, events.length - 1000);
  }
  
  fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2));
  
  res.json({ success: true });
});

// API: Get metrics
app.get('/api/metrics', (req, res) => {
  let metrics = readMetrics();
  
  // Clean old sessions
  metrics = cleanOldSessions(metrics);
  writeMetrics(metrics);
  
  // Get active users count
  const activeUsers = Object.keys(metrics.sessions).length;
  
  // Get top device
  const topDevice = Object.keys(metrics.devices).length > 0
    ? Object.keys(metrics.devices).reduce((a, b) => 
        metrics.devices[a] > metrics.devices[b] ? a : b
      )
    : 'Unknown';
  
  // Get top location
  const topGeo = Object.keys(metrics.locations).length > 0
    ? Object.keys(metrics.locations).reduce((a, b) => 
        metrics.locations[a] > metrics.locations[b] ? a : b
      )
    : 'Unknown';
  
  res.json({
    totalViews: metrics.totalViews,
    activeUsers: activeUsers,
    topDevice: topDevice,
    topGeo: topGeo
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`âœ… Analytics Backend running on http://localhost:${PORT}`);
  console.log(`í³Š Metrics API: http://localhost:${PORT}/api/metrics`);
  console.log(`í¿¥ Health Check: http://localhost:${PORT}/health`);
});
