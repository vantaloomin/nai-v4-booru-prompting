// constants.js - Master hub that imports and re-exports all data

// Import the centralized logger
import logger from './utils/logger-init.js';

// Since this is loaded via script tags directly, we need to handle both ES modules
// and direct browser loading. We'll use dynamic imports for ES module compatibility
// and also attach to the window object for direct script tag loading.

(async function() {
  try {
    // Import the data from modular files
    const characterModule = await import('./data/characterList.js');
    const artistModule = await import('./data/artistList.js');
    const sceneModule = await import('./data/sceneList.js');
    const actionModule = await import('./data/actionList.js');

    // For backward compatibility, add to window with the original variable names
    window.characterData = characterModule.characterData;
    window.artists = artistModule.artistList;
    window.suggestedArtistCombinations = artistModule.suggestedArtistCombinations;
    window.scenes = sceneModule.sceneList;
    
    // Initialize actionTags to an empty array
    window.actionTags = [];
    
    // Set up event listener for when actions are loaded from CSV
    window.addEventListener('actionsLoaded', () => {
      window.actionTags = actionModule.actionList;
      logger.info('Actions loaded from CSV file:', window.actionTags.length);
      
      // Dispatch an event for the action-related components to update
      window.dispatchEvent(new Event('actionsUpdated'));
    });

    logger.success('Constants loaded successfully from modular files');
    
    // Dispatch an event to signal that constants are loaded
    window.dispatchEvent(new Event('constantsLoaded'));
  } catch (error) {
    logger.error('Error loading modular constants:', error);
  }
})();