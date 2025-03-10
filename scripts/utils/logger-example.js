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

// EXAMPLES FOR CHARACTER DATA LOGGING

// 1. Character Selection Logging
// When user selects a character from search results
function onCharacterSelect(character) {
  // Log the core character data when selected
  logger.group('Character Selected');
  logger.info('Character data', character);
  logger.groupEnd();
  
  // Other application logic...
  return character;
}

// Example character data
const exampleCharacter = {
  id: 'char-123',
  name: 'Example Character',
  gender: 'female',
  tags: ['fantasy', 'elf', 'archer'],
  age: 'adult',
  customProperties: {}
};

// Simulate character selection
onCharacterSelect(exampleCharacter);

// 2. Character Updates Logging
// When character attributes are updated
function updateCharacterProperty(characterId, property, value) {
  // Batch logs for character updates
  logger.batch(
    `character-update-${characterId}`, 
    logger.LOG_LEVELS.INFO, 
    'info',
    `Character ${characterId} updated`,
    `${property}: ${JSON.stringify(value)}`
  );
  
  // Other application logic...
}

// Simulate character updates
updateCharacterProperty('char-123', 'gender', 'male');
updateCharacterProperty('char-123', 'age', 'young');
updateCharacterProperty('char-123', 'customTags', ['warrior', 'human']);

// 3. Random Character Selection
function generateRandomCharacter() {
  const randomCharacter = {
    id: 'rand-456',
    name: 'Random Character',
    gender: 'male',
    tags: ['sci-fi', 'robot', 'android'],
    age: 'adult',
    generationParams: {
      seed: 12345,
      randomness: 0.7
    }
  };
  
  logger.info('Random character generated', randomCharacter);
  
  // Other application logic...
  return randomCharacter;
}

// Simulate random character generation
generateRandomCharacter();

// EXAMPLES FOR PROMPT CREATION LOGGING

// 1. Prompt Creation
function createPrompt(promptData) {
  // Process prompt creation...
  
  // Log successful prompt creation with data
  logger.success('Prompt created', promptData);
  
  // Other application logic...
  return promptData;
}

// Example prompt data
const examplePrompt = {
  id: 'prompt-789',
  character: 'char-123',
  positivePrompt: 'masterpiece, best quality, high detail, fantasy setting, forest background',
  negativePrompt: 'low quality, bad anatomy, worst quality',
  params: {
    seed: 98765,
    steps: 28,
    cfg: 7.5
  }
};

// Simulate prompt creation
createPrompt(examplePrompt);

// 2. Prompt Editing
function editPrompt(promptId, changes) {
  // Log prompt edits
  logger.batch(
    `prompt-edit-${promptId}`,
    logger.LOG_LEVELS.INFO,
    'info',
    `Prompt ${promptId} edited`,
    changes
  );
  
  // Other application logic...
}

// Simulate prompt editing
editPrompt('prompt-789', { positivePrompt: 'masterpiece, best quality, high detail, beach setting' });
editPrompt('prompt-789', { params: { seed: 54321 } });

export default {}; // Empty export for module compatibility
