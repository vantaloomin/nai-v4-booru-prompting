# Logger Migration Guide

This guide explains how to migrate from direct `console.log` calls to our new centralized logger utility to make console output more batch-friendly and user-friendly with color formatting.

## Why Use the New Logger?

- **Batch-friendly**: Groups related logs to reduce console clutter
- **Color-coded**: Makes different log types visually distinct
- **Configurable**: Can adjust log level to show only what's important
- **Timestamped**: Includes timestamps for better debugging
- **Consistent**: Standardizes logging across the codebase

## How to Migrate

### Step 1: Import the Logger

Replace direct console calls with the logger in your module:

```javascript
// Old way
console.log("Loading data...");

// New way
import logger from './utils/logger-init.js';
logger.info("Loading data...");
```

### Step 2: Use the Appropriate Log Levels

Choose the right log level based on importance:

```javascript
// Error - for critical problems
logger.error("Failed to load data", error);

// Warning - for potential issues
logger.warn("Using fallback data source");

// Info - for important operational info
logger.info("Data loaded successfully");

// Success - for operation completion
logger.success("All components initialized");

// Debug - for detailed information (only shows in DEBUG mode)
logger.debug("Processing data chunk", chunk);

// Trace - for very detailed tracing (only shows in TRACE mode)
logger.trace("Function call details", details);
```

### Step 3: Use Batching for Repetitive Logs

If you're logging similar things in a loop, use batching:

```javascript
// Old way - spams console
for (let i = 0; i < items.length; i++) {
  console.log(`Processing item ${items[i]}`);
}

// New way - batches similar logs together
for (let i = 0; i < items.length; i++) {
  logger.batch('process-items', logger.LOG_LEVELS.INFO, 'info', 'Processing item', items[i]);
}
```

### Step 4: Group Related Logs

Group related logs to reduce console clutter:

```javascript
// Old way
console.log("Starting asset loading");
console.log("Loading images...");
console.log("Loading sounds...");
console.log("Asset loading complete");

// New way
logger.group("Asset Loading");
logger.info("Loading images...");
logger.info("Loading sounds...");
logger.success("Asset loading complete");
logger.groupEnd();
```

### Step 5: Backward Compatibility (Optional)

If you prefer to keep using `console.log` for now, you can do so. Our system patches the console methods to use the logger under the hood:

```javascript
// These will use the logger system automatically
console.log("This uses the logger");
console.warn("This is a warning");
console.error("This is an error");
console.debug("This is debug info");

// New methods available on console
console.success("Operation completed");
console.batch("key", "Processing item", item);
```

## Log Levels

The logger supports the following log levels (from highest priority to lowest):

1. ERROR - Critical errors that prevent operation
2. WARN - Warnings about potential issues
3. INFO - Important operational information (default)
4. SUCCESS - Successful operation completions
5. DEBUG - Detailed information for debugging
6. TRACE - Very detailed tracing information

Only logs at the current level and higher priority will be shown.

## Controlling the Logger at Runtime

The logger can be controlled through the small floating "Logger" button in the bottom-left corner of the application. Click it to:

- Change the log level
- Clear the console

## Example Migration

### Before:

```javascript
function loadData() {
  console.log("Loading data...");
  try {
    // Some code
    console.log("Data loaded successfully");
  } catch (error) {
    console.log("Error loading data:", error);
  }
}
```

### After:

```javascript
import logger from './utils/logger-init.js';

function loadData() {
  logger.info("Loading data...");
  try {
    // Some code
    logger.success("Data loaded successfully");
  } catch (error) {
    logger.error("Error loading data:", error);
  }
}
```

## Migration Progress Tracker

The following files need to be updated to use the logger utility:

- [x] scripts/customCharacter/ui/autocomplete.js
- [x] scripts/artist/index.js
- [x] scripts/character/ui/components/ageUpToggle.js
- [x] scripts/character/ui/components/genderToggle.js
- [x] scripts/character/ui/components/tagPills.js
- [x] scripts/character/ui/components/breastSizeSlider.js
- [x] scripts/artist/autocomplete.js
- [x] scripts/artist/artistUtils.js
- [x] scripts/character/search/characterSearch.js
- [x] scripts/app.js
- [x] scripts/actions/ui.js
- [x] scripts/actions/display.js
- [x] scripts/actions/constants.js

All files have now been migrated to use the logger utility.
