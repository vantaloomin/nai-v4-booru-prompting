/*******************************************************
 * logger-example.js
 * Examples of how to use the logger utility
 *******************************************************/

import logger from './logger.js';

// Configure the logger (optional - has reasonable defaults)
logger.configure({
  logLevel: 'INFO', // Only show INFO, WARN, ERROR, and SUCCESS logs
  showTimestamps: true, // Prefix logs with timestamps
  enableGrouping: true, // Support for console.group
  batchLogs: true // Batch similar consecutive logs
});

// Basic usage
logger.info('Application started');
logger.success('Operation completed successfully');
logger.warn('This is a warning');
logger.error('An error occurred', { code: 500, message: 'Server error' });
logger.debug('Detailed debug information'); // Won't show with default INFO level
logger.trace('Very detailed trace information'); // Won't show with default INFO level

// Logging with data
const user = { id: 123, name: 'User' };
logger.info('User authenticated', user);

// Group related logs to reduce console clutter
logger.group('Loading assets');
logger.info('Loading images...');
logger.info('Loading sounds...');
logger.success('Assets loaded');
logger.groupEnd();

// Collapsed group for verbose information
logger.group('Verbose initialization details', true); // Collapsed by default
logger.debug('Config loaded from: config.json');
logger.debug('Environment: production');
logger.debug('Database connected');
logger.groupEnd();

// Batch similar logs
for (let i = 0; i < 10; i++) {
  // Instead of 10 separate logs, this will batch them into one entry
  logger.batch('initialization', logger.LOG_LEVELS.INFO, 'info', 'Initialized component', `component-${i}`);
}

// Setting different log levels
// For development:
// logger.setLogLevel('DEBUG'); // Show more detailed logs

// For production:
// logger.setLogLevel('WARN'); // Only show warnings and errors

// Usage with legacy code (backward compatibility)
console.batch('legacy', 'Processing item', 'item-1');
console.batch('legacy', 'Processing item', 'item-2');

export default {}; // Empty export for module compatibility
