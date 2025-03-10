/*******************************************************
 * logger-init.js
 * Initialize and configure the logger for the application
 *******************************************************/

import logger from './logger.js';

// Configure the logger with application defaults
const initLogger = () => {
  // Read log level from localStorage if available
  const storedLogLevel = localStorage.getItem('nai-logLevel') || 'INFO';
  
  logger.configure({
    logLevel: logger.LOG_LEVELS[storedLogLevel],
    showTimestamps: true,
    enableGrouping: true,
    batchLogs: true,
    enabled: true
  });

  // Initialize console patches for backward compatibility
  patchConsoleForBackwardCompatibility();
  
  logger.info('Logger initialized', { level: storedLogLevel });
  return logger;
};

/**
 * Patches the native console methods to allow for both legacy code
 * and proper logger usage to coexist smoothly.
 */
const patchConsoleForBackwardCompatibility = () => {
  // Store original methods
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;
  const originalInfo = console.info;
  const originalDebug = console.debug;
  const originalGroup = console.group;
  const originalGroupCollapsed = console.groupCollapsed;
  const originalGroupEnd = console.groupEnd;

  // Add convenience methods directly to console object
  console.log = function(...args) {
    // Only redirect calls without styling
    if (args.length > 0 && typeof args[0] === 'string' && !args[0].includes('%c')) {
      logger.info(...args);
    } else {
      originalLog.apply(console, args);
    }
  };

  console.warn = function(...args) {
    logger.warn(...args);
  };

  console.error = function(...args) {
    logger.error(...args);
  };

  console.info = function(...args) {
    logger.info(...args);
  };

  console.debug = function(...args) {
    logger.debug(...args);
  };

  // Add a success method to console
  console.success = function(...args) {
    logger.success(...args);
  };

  // Batch logging helper
  console.batch = function(key, message, value) {
    logger.batch(key, logger.LOG_LEVELS.INFO, 'info', message, value);
  };

  // Use a flag to prevent recursion in the group-related methods
  let inGroupCall = false;

  // Preserve group functionality with recursion protection
  console.group = function(label) {
    if (inGroupCall) {
      // If we're already in a group call from logger, use original method
      originalGroup.apply(console, arguments);
    } else {
      inGroupCall = true;
      logger.group(label);
      inGroupCall = false;
    }
  };

  console.groupCollapsed = function(label) {
    if (inGroupCall) {
      // If we're already in a group call from logger, use original method
      originalGroupCollapsed.apply(console, arguments);
    } else {
      inGroupCall = true;
      logger.group(label, true);
      inGroupCall = false;
    }
  };

  console.groupEnd = function() {
    if (inGroupCall) {
      originalGroupEnd.apply(console);
    } else {
      inGroupCall = true;
      logger.groupEnd();
      inGroupCall = false;
    }
  };

  logger.debug('Console patched for backward compatibility');
};

// Add a control panel to adjust logging at runtime (add to HTML)
const addLoggerControls = () => {
  // Create logger control container
  const container = document.createElement('div');
  container.id = 'logger-controls';
  container.style.cssText = `
    position: fixed;
    bottom: 10px;
    left: 10px;
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 12px;
    z-index: 1000;
    display: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  `;

  // Add toggle button for the panel
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Logger';
  toggleButton.style.cssText = `
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 1001;
    padding: 4px 8px;
    background: #2196F3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
  `;
  
  document.body.appendChild(toggleButton);
  
  toggleButton.addEventListener('click', () => {
    const isVisible = container.style.display === 'block';
    container.style.display = isVisible ? 'none' : 'block';
  });

  // Create level selector
  const levelLabel = document.createElement('label');
  levelLabel.textContent = 'Log Level: ';
  
  const levelSelect = document.createElement('select');
  Object.keys(logger.LOG_LEVELS).forEach(level => {
    const option = document.createElement('option');
    option.value = level;
    option.textContent = level;
    if (level === 'INFO') option.selected = true;
    levelSelect.appendChild(option);
  });
  
  levelSelect.addEventListener('change', e => {
    const selectedLevel = e.target.value;
    logger.setLogLevel(selectedLevel);
    localStorage.setItem('nai-logLevel', selectedLevel);
  });

  // Create clear button
  const clearButton = document.createElement('button');
  clearButton.textContent = 'Clear Console';
  clearButton.style.marginLeft = '8px';
  clearButton.addEventListener('click', () => console.clear());

  // Assemble the controls
  container.appendChild(levelLabel);
  container.appendChild(levelSelect);
  container.appendChild(clearButton);
  document.body.appendChild(container);
  
  logger.debug('Logger controls added to UI');
};

// Initialize the logger
const appLogger = initLogger();

// Add UI controls when the DOM is loaded
document.addEventListener('DOMContentLoaded', addLoggerControls);

// Make logger globally accessible
window.logger = appLogger;

export default appLogger;
