/*******************************************************
 * logger-patch.js
 * Patches console methods to ensure prompt-related logs are captured
 *******************************************************/

// Store original console methods
const originalConsole = {
  log: console.log,
  warn: console.warn,
  error: console.error,
  info: console.info,
  debug: console.debug
};

// Function to try to import and use the logger
const tryUseLogger = async (level, args) => {
  try {
    // Try different paths to import the logger
    const paths = [
      './logger-init.js',             // Same directory (utils)
      '/scripts/utils/logger-init.js' // Absolute path from root
    ];
    
    for (const path of paths) {
      try {
        const module = await import(path);
        const logger = module.default;
        if (logger && typeof logger[level] === 'function') {
          // Use the logger with the appropriate level
          logger[level].apply(logger, args);
          return true;
        }
      } catch (e) {
        // Continue trying other paths
      }
    }
    
    // If window.logger exists, use it
    if (window.logger && typeof window.logger[level] === 'function') {
      window.logger[level].apply(window.logger, args);
      return true;
    }
    
    return false;
  } catch (err) {
    return false;
  }
};

// Patch console.log to check for prompt-related logs
console.log = function(...args) {
  // Always call the original console.log first
  originalConsole.log.apply(console, args);
  
  // Check if this is a prompt-related log
  const isPromptLog = args.some(arg => {
    if (typeof arg === 'string') {
      return arg.includes('prompt') || arg.includes('Prompt');
    }
    return false;
  });
  
  if (isPromptLog) {
    // Try to use the logger for this prompt log
    tryUseLogger('success', [`Console Log Intercepted: ${args[0]}`, args.slice(1)]);
  }
};

// Auto-load this script at page start
document.addEventListener('DOMContentLoaded', () => {
  console.log('Logger patch installed - all prompt logs will be captured');
}); 