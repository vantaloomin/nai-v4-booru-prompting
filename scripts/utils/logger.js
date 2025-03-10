/*******************************************************
 * logger.js
 * Centralized logging utility for batch-friendly console output
 * with color formatting and log level filtering.
 *******************************************************/

/**
 * Logger utility for batch-friendly console output
 * Features:
 * - Color-coded log types
 * - Timestamp prefixing
 * - Log level filtering
 * - Group related logs together 
 * - Optional verbose mode
 */
class Logger {
  constructor() {
    // Log levels in order of verbosity (lower index = more important)
    this.LOG_LEVELS = {
      ERROR: 0,   // Critical errors (red)
      WARN: 1,    // Warnings (orange)
      INFO: 2,    // Important information (blue)
      SUCCESS: 3, // Successful operations (green)
      DEBUG: 4,   // Debug information (gray)
      TRACE: 5    // Very detailed trace information (light gray)
    };

    // Default configuration
    this.config = {
      // Current log level - only logs at this level and more important (lower index) will be shown
      logLevel: this.LOG_LEVELS.INFO,
      // Whether to show timestamps
      showTimestamps: true,
      // Whether to group related logs (reduced spam)
      enableGrouping: true,
      // Whether to batch similar consecutive logs
      batchLogs: true,
      // Enable/disable all logging
      enabled: true
    };

    // Store for batching similar logs
    this.batchStore = {};
    this.groupStack = [];
  }

  /**
   * Configure the logger
   * @param {Object} options - Configuration options
   */
  configure(options = {}) {
    this.config = { ...this.config, ...options };
    console.log('%cLogger configured', 'color: gray; font-style: italic;', this.config);
    return this;
  }

  /**
   * Set the log level
   * @param {string} level - Log level (ERROR, WARN, INFO, SUCCESS, DEBUG, TRACE)
   */
  setLogLevel(level) {
    if (this.LOG_LEVELS[level] !== undefined) {
      this.config.logLevel = this.LOG_LEVELS[level];
      this.info(`Log level set to ${level}`);
    } else {
      this.warn(`Invalid log level: ${level}. Using default: INFO`);
    }
    return this;
  }

  /**
   * Get current timestamp formatted string
   */
  getTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false });
  }

  /**
   * Format a message with timestamp if enabled
   * @param {string} message - The message to format
   */
  formatWithTimestamp(message) {
    if (this.config.showTimestamps) {
      return `[${this.getTimestamp()}] ${message}`;
    }
    return message;
  }

  /**
   * Get styles for different log types
   * @param {string} type - Log type (error, warn, info, etc.)
   */
  getStyles(type) {
    const styles = {
      error: 'color: #FF5252; font-weight: bold;',
      warn: 'color: #FFC107; font-weight: bold;',
      info: 'color: #2196F3; font-weight: bold;',
      success: 'color: #4CAF50; font-weight: bold;',
      debug: 'color: #9E9E9E;',
      trace: 'color: #E0E0E0; font-style: italic;',
      group: 'color: #673AB7; font-weight: bold;',
    };
    return styles[type] || styles.info;
  }

  /**
   * Log a message if the current log level permits
   * @param {number} level - Log level importance
   * @param {string} type - Log type for styling
   * @param {string} message - The message to log
   * @param {...any} args - Additional arguments to log
   */
  log(level, type, message, ...args) {
    if (!this.config.enabled || level > this.config.logLevel) {
      return;
    }

    const formattedMessage = this.formatWithTimestamp(message);
    const style = this.getStyles(type);

    if (args.length > 0) {
      console.log(`%c${formattedMessage}`, style, ...args);
    } else {
      console.log(`%c${formattedMessage}`, style);
    }
  }

  /**
   * Start a new log group
   * @param {string} label - Group label
   * @param {boolean} collapsed - Whether the group should be collapsed by default
   */
  group(label, collapsed = false) {
    if (!this.config.enabled || !this.config.enableGrouping) {
      return;
    }
    
    // Prevent recursion - don't add timestamp for group labels
    // Use a simple label without additional formatting to avoid recursion
    this.groupStack.push(label);
    
    if (collapsed) {
      console.groupCollapsed(`%c${label}`, this.getStyles('group'));
    } else {
      console.group(`%c${label}`, this.getStyles('group'));
    }
  }

  /**
   * End the current log group
   */
  groupEnd() {
    if (!this.config.enabled || !this.config.enableGrouping || this.groupStack.length === 0) {
      return;
    }
    
    this.groupStack.pop();
    console.groupEnd();
  }

  /**
   * Log an error message
   * @param {string} message - Error message
   * @param {...any} args - Additional arguments
   */
  error(message, ...args) {
    this.log(this.LOG_LEVELS.ERROR, 'error', message, ...args);
    return this;
  }

  /**
   * Log a warning message
   * @param {string} message - Warning message
   * @param {...any} args - Additional arguments
   */
  warn(message, ...args) {
    this.log(this.LOG_LEVELS.WARN, 'warn', message, ...args);
    return this;
  }

  /**
   * Log an info message
   * @param {string} message - Info message
   * @param {...any} args - Additional arguments
   */
  info(message, ...args) {
    this.log(this.LOG_LEVELS.INFO, 'info', message, ...args);
    return this;
  }

  /**
   * Log a success message
   * @param {string} message - Success message
   * @param {...any} args - Additional arguments
   */
  success(message, ...args) {
    this.log(this.LOG_LEVELS.SUCCESS, 'success', message, ...args);
    return this;
  }

  /**
   * Log a debug message
   * @param {string} message - Debug message
   * @param {...any} args - Additional arguments
   */
  debug(message, ...args) {
    this.log(this.LOG_LEVELS.DEBUG, 'debug', message, ...args);
    return this;
  }

  /**
   * Log a trace message (very detailed)
   * @param {string} message - Trace message
   * @param {...any} args - Additional arguments
   */
  trace(message, ...args) {
    this.log(this.LOG_LEVELS.TRACE, 'trace', message, ...args);
    return this;
  }

  /**
   * Batch a log to reduce repetitive console entries
   * @param {string} key - Unique key for this batch
   * @param {number} level - Log level importance
   * @param {string} type - Log type for styling
   * @param {string} message - Base message 
   * @param {any} value - Value to batch
   */
  batch(key, level, type, message, value) {
    if (!this.config.enabled || !this.config.batchLogs || level > this.config.logLevel) {
      // If batching disabled or filtered by level, just log directly
      this.log(level, type, `${message}: ${value}`);
      return;
    }

    // Initialize or update the batch entry
    if (!this.batchStore[key]) {
      this.batchStore[key] = {
        level,
        type,
        message,
        count: 1,
        values: [value],
        timestamp: Date.now()
      };
      // Schedule flush after 1 second of inactivity
      setTimeout(() => this.flushBatch(key), 1000);
    } else {
      // Update existing batch
      this.batchStore[key].count++;
      this.batchStore[key].values.push(value);
      this.batchStore[key].timestamp = Date.now();
    }
  }

  /**
   * Flush a specific batch to the console
   * @param {string} key - Batch key
   */
  flushBatch(key) {
    if (!this.batchStore[key]) return;
    
    const batch = this.batchStore[key];
    const valuesStr = batch.values.length > 3 
      ? `${batch.values.slice(0, 3).join(', ')}... (${batch.count} total)`
      : batch.values.join(', ');
    
    this.log(
      batch.level, 
      batch.type, 
      `${batch.message}: ${valuesStr}`,
      batch.count > 1 ? `(${batch.count} occurrences)` : ''
    );
    
    delete this.batchStore[key];
  }

  /**
   * Flush all batched logs immediately
   */
  flushAllBatches() {
    Object.keys(this.batchStore).forEach(key => this.flushBatch(key));
  }
}

// Create and export a singleton instance
const logger = new Logger();

// Add a global method to extend console for backwards compatibility
console.batch = (key, message, value) => {
  logger.batch(key, logger.LOG_LEVELS.INFO, 'info', message, value);
};

// Export the logger
export default logger;
