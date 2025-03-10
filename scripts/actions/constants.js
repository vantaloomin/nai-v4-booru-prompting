/**
 * Actions Constants Module
 * 
 * Re-exports action-related constants from the main constants file
 */

import logger from '../utils/logger-init.js';

// Re-export actionTags from the main constants file
export let actionTags = [];

// Dynamically load the actionTags from the main constants file
// This will wait for the main constants to be loaded and will also update when actions are loaded from CSV
window.addEventListener('constantsLoaded', () => {
  actionTags = window.actionTags || [];
});

// Listen for the event when actions are updated from CSV
window.addEventListener('actionsUpdated', () => {
  actionTags = window.actionTags || [];
  logger.info('Actions module updated with CSV data:', actionTags.length);
}); 