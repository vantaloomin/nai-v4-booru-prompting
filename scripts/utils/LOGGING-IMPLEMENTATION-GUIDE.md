# Extended Logging Implementation Guide

This guide provides instructions for implementing extended logging in our application, focusing on character data objects and prompt creation.

## 1. Character Data Logging

### Character Selection

When a user selects a character from search results or generates a random character, we should log the character's core data:

```javascript
import logger from '../utils/logger.js';

// In your character selection handler function:
function onCharacterSelect(character) {
  logger.group('Character Selected');
  logger.info('Character data', character);
  logger.groupEnd();
  
  // Continue with character selection logic...
}

// In your random character generation function:
function generateRandomCharacter() {
  const randomCharacter = /* generation logic */;
  
  logger.info('Random character generated', randomCharacter);
  
  // Continue with random character logic...
  return randomCharacter;
}
```

### Character Updates

When character attributes are updated (gender, age toggle, custom tags, enhancer, etc.), batch log these changes:

```javascript
import logger from '../utils/logger.js';

// For individual property updates:
function updateCharacterProperty(characterId, property, value) {
  // Update the character property in your application
  
  // Log the update
  logger.batch(
    `character-update-${characterId}`, 
    logger.LOG_LEVELS.INFO, 
    'info',
    `Character ${characterId} updated`,
    `${property}: ${JSON.stringify(value)}`
  );
}

// For bulk updates (when multiple properties change at once):
function updateCharacterProperties(characterId, propertyUpdates) {
  // Update the character properties in your application
  
  // Log each updated property
  Object.entries(propertyUpdates).forEach(([property, value]) => {
    logger.batch(
      `character-update-${characterId}`, 
      logger.LOG_LEVELS.INFO, 
      'info',
      `Character ${characterId} updated`,
      `${property}: ${JSON.stringify(value)}`
    );
  });
}
```

### Suggested Files for Implementation

Based on the workspace structure, consider implementing character logging in:

- `scripts/character/search/characterSearch.js` - For character selection from search
- `scripts/character/ui/components/genderToggle.js` - For gender updates
- `scripts/character/ui/components/ageUpToggle.js` - For age updates
- `scripts/character/ui/components/tagPills.js` - For tag updates
- `scripts/character/ui/components/breastSizeSlider.js` - For appearance updates
- Any files handling random character generation

## 2. Prompt Creation Logging

### Prompt Creation

When a prompt is created, log the prompt data with a SUCCESS level:

```javascript
import logger from '../utils/logger.js';

function createPrompt(promptData) {
  // Process prompt creation logic
  
  // Log successful prompt creation
  logger.success('Prompt created', promptData);
  
  // Continue with prompt creation logic...
  return promptData;
}
```

### Prompt Editing

When a prompt is edited, batch log the changes:

```javascript
import logger from '../utils/logger.js';

function editPrompt(promptId, changes) {
  // Process prompt edit logic
  
  // Log prompt edits
  logger.batch(
    `prompt-edit-${promptId}`,
    logger.LOG_LEVELS.INFO,
    'info',
    `Prompt ${promptId} edited`,
    changes
  );
  
  // Continue with prompt editing logic...
}
```

### Suggested Files for Implementation

Look for files that handle prompt creation and editing, likely in:

- Any files related to prompt building/creation
- Any files handling the prompt generation CTA

## 3. Other Features That May Benefit From Logging

Consider adding logging to these additional areas:

### Image Generation

```javascript
// When generating an image
function generateImage(params) {
  logger.info('Image generation started', params);
  
  // Generation logic...
  
  // On successful generation
  logger.success('Image generated', {
    id: generatedImage.id,
    seed: params.seed,
    dimensions: `${params.width}x${params.height}`
  });
}
```

### User Preferences

```javascript
// When user preferences are updated
function updateUserPreferences(preferences) {
  logger.info('User preferences updated', preferences);
}
```

### API Calls

```javascript
// Before making API calls
function makeAPICall(endpoint, params) {
  logger.debug('API call', { endpoint, params });
  
  // API call logic...
  
  // On success
  logger.success('API call successful', { endpoint });
  
  // On error
  logger.error('API call failed', { endpoint, error });
}
```

## Implementation Checklist

Use this checklist to track implementation progress:

- [ ] Character selection logging
- [ ] Random character generation logging
- [ ] Character property updates logging
- [ ] Prompt creation logging
- [ ] Prompt editing logging
- [ ] Image generation logging (optional)
- [ ] User preferences logging (optional)
- [ ] API calls logging (optional)

## Testing Your Logging Implementation

1. Set the logger to DEBUG level during development:
   ```javascript
   logger.setLogLevel('DEBUG');
   ```

2. Perform the actions that should trigger logging:
   - Select a character
   - Update character properties
   - Create a prompt
   - Edit a prompt

3. Check the browser console to ensure logs appear as expected

4. Verify that batch logs are correctly grouped and displayed 